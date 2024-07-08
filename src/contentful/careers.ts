import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '../contentful/contentful';
import { type Career } from '../contentful/types';

export async function getStaticPaths() {
  const locales = ['en-US', 'uk']; // Добавьте все нужные локали
  let paths:any = [];

  for (const locale of locales) {
    const { items } = await contentfulClient.getEntries<Career>({
      content_type: 'careers',
      locale,
    });

    const vacancies = items.map((entry) => ({
      ...entry.fields,
      description: documentToHtmlString(entry.fields.description),
    }));

    paths = paths.concat(
      vacancies.map((vacancy) => ({
        params: { lang: locale, vacancy },
        props: { vacancy, locale },
      }))
    );
  }

  return { paths };
}
