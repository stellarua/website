import {type EntryFieldTypes, type Asset} from "contentful";
import { type Document } from '@contentful/rich-text-types';


export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    pubDate: EntryFieldTypes.Date,
    author: EntryFieldTypes.Text,
    photo: Object,
    slug: EntryFieldTypes.Text,
    mainText: Document,
  }
}
export interface InformPages {
  contentTypeId: "InformPages",
  fields: {
    title: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    pubDate: EntryFieldTypes.Date,
    author: EntryFieldTypes.Text,
    photo: Object,
    slug: EntryFieldTypes.Text,
    mainText: Document,
  }
}

export interface MainPageSlider {
  contentTypeId: "mainPageSlider",
  fields: {
    description: EntryFieldTypes.Text,
    sliderPhoto: Asset,
  }
}


export interface Career {
  contentTypeId: "careers",
  fields: {
    career: EntryFieldTypes.Text,
    city: EntryFieldTypes.Text,
    employmentForm: EntryFieldTypes.Text,
    description: EntryFieldTypes.RichText,
  }
}
export interface Testimonials {
  contentTypeId: "testimonials",
  fields: {
    userName: EntryFieldTypes.Text,
    companyName: EntryFieldTypes.Text,
    testimonials: EntryFieldTypes.Text,
    userAvatar: Asset,
    filterTag: EntryFieldTypes.Text,
  }
}
export interface TopMenuItems {
  contentTypeId: "topMenuItems",
  fields: {
    menuItemTitle: EntryFieldTypes.Text,
    menuItemLink: EntryFieldTypes.Text
  }
}
export interface DonatePage { 
  contentTypeId: "donatePage",
  fields: {
    title: EntryFieldTypes.Text,
    firstText: EntryFieldTypes.Text,
    howToDonate: EntryFieldTypes.Text,
    secondText: EntryFieldTypes.Text,
    forForeignersButton: EntryFieldTypes.Text,
    forLocalsButton: EntryFieldTypes.Text,
    forDonations: EntryFieldTypes.Text,
    transferText: EntryFieldTypes.Text,
  }
}