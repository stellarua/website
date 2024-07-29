import { BLOCKS } from '@contentful/rich-text-types';

export const locales = ['en-US', 'uk'];

export const options = {
  renderNode: {
    //@ts-ignore
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) => {
      if (fields && fields.file && fields.file.details && fields.file.details.image) {
        return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}" />`;
      }
      return '';
    },
  },
};
