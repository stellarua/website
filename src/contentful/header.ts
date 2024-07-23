import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '../contentful/contentful';
import { type TopMenuItems } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<TopMenuItems>({
      content_type: 'topMenuItems',
      locale,
    });

    const headerElem: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      headerElem.map((element:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }
  
  return { paths };
}
