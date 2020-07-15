import { Contributor } from '../app/pages/about/about/about.component';

export interface Language {
  label: string;
  value: string;
}

export type AvailableLanguages = 'en';

export interface Link {
  display: boolean;
  url: string;
}

export interface Meta {
  contributors: Contributor[];
  languages: Language[];
  links: {
    github: Link;
    medium: Link;
    facebook: Link;
    youtube: Link;
  };
  copyright: {
    name: string;
    url: string;
  };
}

export const META: Meta = {
  contributors: [
    {
      name: 'Aidan Pine',
      title: 'Lead Developer',
      text:
        /* tslint:disable */
        "Aidan is an application development specialist on the NRC's Indigenous Language Technology project. Aidan is interested in language revitalization because of its inherently multidisplinary nature and because of the social justice component at the centre of the work. Aidan is humbled and excited to be working with such an accomplished and dynamic team and hopes to continue improving the WordWeaver for years to come.",
      img: false
    }
  ],
  languages: [{ label: 'en', value: 'en' }],
  copyright: {
    name: 'Mother Tongues',
    url: 'https://mothertongues.org'
  },
  links: {
    github: {
      display: false,
      url: ''
    },
    medium: {
      display: false,
      url: ''
    },
    facebook: {
      display: false,
      url: ''
    },
    youtube: {
      display: false,
      url: ''
    }
  }
};
