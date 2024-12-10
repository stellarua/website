import { contentfulClient } from '../contentful/contentful';
import { type AnnouncementTopBar } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<AnnouncementTopBar>({
      content_type: 'announcementTopBar',
      locale,
    });

    const annoucEl: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      annoucEl.map((element:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }
  
  return { paths };
}
