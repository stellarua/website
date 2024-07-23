import { contentfulClient } from '../contentful/contentful';
import type { DonatePage } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<DonatePage>({
      content_type: 'donatePage',
      locale,
    });

    const pageElems: any = items.map((entry) => entry.fields);

    paths = paths.concat(
      pageElems.map((element: any) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }

  return { paths };
}
