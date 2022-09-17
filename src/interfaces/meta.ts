export interface IMeta {
  collection: ICollection;
  nft_metadata: INftMetadatum[];
}

export interface ICollection {
  id: number;
  name: string;
  desc: string;
  symbol: string;
  second_id: string;
  img: null;
  banner_image: null;
  total_Supply: string;
  isverified: boolean;
  published_date: string;
  doxxedMembers: string;
  projectDescription: string;
  projectUtility: string;
  tokenUtility: string;
  ecosystemMetaverse: string;
  twitter: string;
  discord: string;
  website: string;
  hashlist_filename: string;
  mint_drop_date: null;
  id_derivate: boolean;
  url_pathname: string;
  status: string;
  form_identifier: null;
  creator_id: null;
  category_id: number;
}

export interface INftMetadatum {
  mint: string;
  metadata: IMetadata;
}

export interface IMetadata {
  name: string;
  symbol: string;
  description: string;
  seller_fee_basis_points: number;
  image: string;
  attributes: IAttribute[];
  properties: IProperties;
}

export interface IAttribute {
  trait_type: string;
  value: string;
}

export interface IProperties {
  files: IFile[];
  creators: ICreator[];
}

export interface ICreator {
  address: string;
  share: number;
}

export interface IFile {
  uri: string;
  type: string;
}
