import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '../contentful/contentful';
import { type Testimonials } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any[] = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<Testimonials>({
      content_type: 'testimonials',
      locale,
    });

    const reviews: any = items.map((entry) => ({ ...entry.fields }));

    paths = paths.concat(
      reviews.map((review:any,) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale },
        props: { review, locale },
      }))
    );
  }

  return { paths };
}
