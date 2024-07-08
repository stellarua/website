import { contentfulClient } from '../contentful/contentful';
import type { BlogPost } from '../contentful/types';

export async function getStaticPaths() {
  const locales = ['en-US', 'uk']; // Добавьте все нужные локали
  let paths: any = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<BlogPost>({
      content_type: 'blogPost',
      locale,
    });

    const posts: any = items.map((entry) => entry.fields);

    paths = paths.concat(
      posts.map((post: any) => ({
        params: { locale, slug: post.slug },
        props: { post, locale },
      }))
    );
  }

  return { paths };
}
