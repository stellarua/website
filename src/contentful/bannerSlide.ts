import { contentfulClient } from '../contentful/contentful';
import { type BannerSlide } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<BannerSlide>({
      content_type: 'bannerSlide',
      locale,
    });

    const bannerEl: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      bannerEl.map((element:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { element, locale },
      }))
    );
  }
  
  return { paths };
}
