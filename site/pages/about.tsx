import { NextSeo } from "next-seo";
import BreadCamps from "../components/breadCamps";

export default function About() {
  return (
    <div className="my-3 sm:my-2">
      <NextSeo title="Abo turibo" />

      <div className="max-w-5xl mx-auto my-8 lg:px-3">
        <div className="prose prose-p:leading-8 prose-li:leading-8 prose-p:text-[15px] prose-p:font-medium- prose-p:text-slate-500 prose-li:text-[15px] prose-li:font-medium- prose-li:text-slate-500 mt-0">
          <h2>Abo turibo.</h2>
          <p>
            Infinity Tech Solution ni urubuga rwashyiriweho gufasha abanyarwanda
            , Abanrundi Bose kumenya amategeko y&apos;umuhanda mu rwego rwo
            kwirinda impanuka ziterwa no kutamenya amategeko agenga uburyo bwo
            kugenda mu muhanda. Ariko cyane cyane tunafasha abashaka kubona
            uruhushya rw&apos;agateganyo rwo gutwara ibinyabiziga (Provisoire)
          </p>

          <div>
            <h4>Service dutanga:</h4>
            <ul>
              <li>
                Kwigisha amategeko y&apos;umuhanda mu buryo bwo gusoma igazeti.
              </li>
              <li>Kwigisha amategeko y&apos;umuhanda mu majwi.</li>
              <li>Gutanga imyitozo ifasha umunyeshuri kwihugura.</li>
              <li>Gutanga Ibibazo n&apos;ibisubizo uwiga yaba akoresha</li>
              <li>Kwigisha ibyapa neza ukabyiga ubibona</li>
              <li>
                Kwigisha ibimenyetso byo mu muhanda, n&apos;ibimenyetso bimurika
                (Feruje) ukabyiga neza kandi ubibona.
              </li>
              <li>
                Gutanga inama n&apos;amakuru y&apos;ingenzi byafasha umunyeshuri
                gutsindira uruhushya rw&apos;agateganyo (Provisoire) cyangwa
                uruhushya rwa burundu (Permit)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
