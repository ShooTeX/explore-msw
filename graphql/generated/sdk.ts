import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type GetCharacterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name?: string | null, status?: string | null } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetCharacterQuery(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { character }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockGetCharacterQuery = (resolver: GraphQLResponseResolver<GetCharacterQuery, GetCharacterQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<GetCharacterQuery, GetCharacterQueryVariables>(
    'getCharacter',
    resolver,
    options
  )


export const GetCharacterDocument = gql`
    query getCharacter {
  character(id: 1) {
    name
    status
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCharacter(variables?: GetCharacterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCharacterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCharacterQuery>(GetCharacterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCharacter', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

export const aCharacter = (overrides?: Partial<Character>, _relationshipsToOmit: Set<string> = new Set()): Character => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Character');
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'natus',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit)],
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'mollitia',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a27edb72-6fd6-49c4-a8ad-43727bbfccf0',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'quia',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quia',
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'id',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'eum',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'consectetur',
    };
};

export const aCharacters = (overrides?: Partial<Characters>, _relationshipsToOmit: Set<string> = new Set()): Characters => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Characters');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
    };
};

export const anEpisode = (overrides?: Partial<Episode>, _relationshipsToOmit: Set<string> = new Set()): Episode => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Episode');
    return {
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : 'molestias',
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'et',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'tempora',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6d55cfbc-a432-4e88-8866-71f705990e69',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'repellat',
    };
};

export const anEpisodes = (overrides?: Partial<Episodes>, _relationshipsToOmit: Set<string> = new Set()): Episodes => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Episodes');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit)],
    };
};

export const aFilterCharacter = (overrides?: Partial<FilterCharacter>, _relationshipsToOmit: Set<string> = new Set()): FilterCharacter => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterCharacter');
    return {
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'et',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'laboriosam',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'cumque',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'placeat',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'facere',
    };
};

export const aFilterEpisode = (overrides?: Partial<FilterEpisode>, _relationshipsToOmit: Set<string> = new Set()): FilterEpisode => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterEpisode');
    return {
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'dolorem',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'officia',
    };
};

export const aFilterLocation = (overrides?: Partial<FilterLocation>, _relationshipsToOmit: Set<string> = new Set()): FilterLocation => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('FilterLocation');
    return {
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'omnis',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sit',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'laborum',
    };
};

export const anInfo = (overrides?: Partial<Info>, _relationshipsToOmit: Set<string> = new Set()): Info => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Info');
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 4434,
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 5511,
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : 6704,
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : 8829,
    };
};

export const aLocation = (overrides?: Partial<Location>, _relationshipsToOmit: Set<string> = new Set()): Location => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Location');
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'quia',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'sint',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bfe52c08-bd42-41df-a3d4-364c80b41fe8',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'optio',
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'ipsa',
    };
};

export const aLocations = (overrides?: Partial<Locations>, _relationshipsToOmit: Set<string> = new Set()): Locations => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Locations');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit)],
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Set<string> = new Set()): Query => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Query');
    return {
        character: overrides && overrides.hasOwnProperty('character') ? overrides.character! : relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit),
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : relationshipsToOmit.has('Characters') ? {} as Characters : aCharacters({}, relationshipsToOmit),
        charactersByIds: overrides && overrides.hasOwnProperty('charactersByIds') ? overrides.charactersByIds! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit),
        episodes: overrides && overrides.hasOwnProperty('episodes') ? overrides.episodes! : relationshipsToOmit.has('Episodes') ? {} as Episodes : anEpisodes({}, relationshipsToOmit),
        episodesByIds: overrides && overrides.hasOwnProperty('episodesByIds') ? overrides.episodesByIds! : [relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit)],
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.has('Locations') ? {} as Locations : aLocations({}, relationshipsToOmit),
        locationsByIds: overrides && overrides.hasOwnProperty('locationsByIds') ? overrides.locationsByIds! : [relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit)],
    };
};
