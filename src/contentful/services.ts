import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from './contentful';
import { type Services } from './types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<Services>({
      content_type: 'servecesItems',
      locale,
    });

    const servingItems: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      servingItems.map((serving:any) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { serving, locale },
      }))
    );
  }

  return { paths };
}
