import { contentfulClient } from '../contentful/contentful';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries({
      content_type: 'marquee',
      locale,
    });

    const marquee: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      marquee.map((element:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }
  
  return { paths };
}
