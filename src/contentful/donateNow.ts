import { contentfulClient } from '../contentful/contentful';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries({
      content_type: 'donateNowSection',
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
