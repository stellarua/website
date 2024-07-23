import { contentfulClient } from '../contentful/contentful';
import type { InformPages } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {
  let paths: any = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<InformPages>({
      content_type: 'InformPages',
      locale,
    });

    const posts: any = items.map((entry) => entry.fields);

    paths = paths.concat(
      posts.map((post: any) => ({
        params: { locale: locale === 'uk' ? 'uk-UA' : locale, slug: post.slug },
        props: { post, locale },
      }))
    );
  }

  return { paths };
}
