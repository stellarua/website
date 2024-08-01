import { contentfulClient } from '../contentful/contentful';
import {locales} from './configData'
import type { SocialMedia } from './types';

export async function getStaticPaths() {
    const { items } = await contentfulClient.getEntries<SocialMedia>({
      content_type: 'socialLinks'
    });
    const partners: any = items.map((entry) => ({ ...entry.fields }));

  
  return {
    params: {},
    props: items[0]?.fields,
  };
}
