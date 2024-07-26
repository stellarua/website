import { contentfulClient } from '../contentful/contentful';
import {locales} from './configData'
import type { Footer } from './types';

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<Footer>({
      content_type: 'footerMenu',
      locale,
    });

    const footerElem: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      footerElem.map((element:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }
  
  return { paths };
}
