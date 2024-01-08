export interface IAddress {
  context: IAddressContext;
  external_ids: ExternalIds;
  feature_type: string;
  language: string;
  maki: string;
  mapbox_id: string;
  metadata: Record<string, unknown>;
  name: string;
  place_formatted: string;
  name_preferred: string;
  poi_category?: string[];
  poi_category_ids?: string[];
  address?: string;
  full_address?: string;
  message?: string;
}
export interface ISearchResult {
  suggestions: IAddress[];
}

interface IAddressContext {
  country: {
    id?: string;
    name: string;
    country_code: string;
    country_code_alpha_3: string;
  };
  region?: {
    id?: string;
    name: string;
    region_code: string;
    region_code_full: string;
  };
  place?: {
    id?: string;
    name: string;
  };
  postcode?: {
    id?: string;
    name: string;
  };
  locality?: {
    id?: string;
    name: string;
  };
  address?: {
    id?: string;
    name: string;
    address_number?: string;
    street_name?: string;
  };
  street?: {
    id?: string;
    name: string;
  };
}

interface ExternalIds {
  [key: string]: string;
}

export interface ILocationStateProps {
  children: React.ReactNode;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IUserLocationContext {
  userLocation: ILocation | null;
  setUserLocation: (location: ILocation) => void;
}
