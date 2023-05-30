import Link from "next/link";

import Container from "components/Container";
import ProjectTile from "components/ProjectTile";
import AnyTile from "components/AnyTile";

import { H2, H4 } from "styles/Type";
import type { Project } from "types/Project";
import withAppMasquerade from "@/lib/withAppMasquerade";

const getServerSideProps = withAppMasquerade(async (_params) => {
  const { params } = _params;
  const { API } = await import("lib/api");
  const { data } = await API.get<any>("/api/discovery/");

  return {
    masquerade: params.masquerade,
    ...data,
  };
});

const SHOWN_ENTITY_MAP = {
  artist: "Brand",
  brand: "Artist",
};

const HEADING_MAP = {
  brand: "Your top matching artists",
  artist: "Your top matching brands",
};

export default async function DiscoverPage() {
  const { profiles, projects, masquerade } = await getServerSideProps();

  return (
    <>
      <section className="bg-offblack text-white py-10">
        <Container>
          <div className="flex items-baseline mb-9">
            <H2>{HEADING_MAP[masquerade.type]}</H2>
            <Link href="/directory" passHref legacyBehavior>
              <H4 as="a" className="uppercase opacity-70 ml-2.5">
                View All
              </H4>
            </Link>
          </div>
        </Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 group">
          {profiles
            ?.filter(({ type }) => type === SHOWN_ENTITY_MAP[masquerade.type])
            ?.map((props) => (
              <AnyTile key={props.name} {...props} />
            ))}
        </div>
      </section>
      {projects?.length > 0 && (
        <section className="bg-offblack text-white pb-10 pt-14">
          <Container>
            <div className="flex items-baseline mb-9">
              <H2>Open projects of interest</H2>
              <Link href="/projects" passHref legacyBehavior>
                <H4 as="a" className="uppercase opacity-70 ml-2.5">
                  View All
                </H4>
              </Link>
            </div>
          </Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 group">
            {projects?.map(({ name, ...props }) => {
              return (
                <ProjectTile key={name} name={name} {...(props as Project)} />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
