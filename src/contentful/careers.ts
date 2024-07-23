import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '../contentful/contentful';
import { type Career } from '../contentful/types';
import {locales} from './configData'

export async function getStaticPaths() {

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
        params: { locale: locale === 'uk' ? 'uk-UA' : locale, vacancy },
        props: { vacancy, locale: locale === 'uk' ? 'uk-UA' : locale },
      }))
    );
  }

  return { paths };
}
