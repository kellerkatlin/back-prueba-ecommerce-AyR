/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Empresa
 *
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>;
/**
 * Model Cliente
 *
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>;
/**
 * Model Categoria
 *
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>;
/**
 * Model Producto
 *
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>;
/**
 * Model Stock
 *
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>;
/**
 * Model MovimientoInventario
 *
 */
export type MovimientoInventario =
  $Result.DefaultSelection<Prisma.$MovimientoInventarioPayload>;
/**
 * Model PedidoCab
 *
 */
export type PedidoCab = $Result.DefaultSelection<Prisma.$PedidoCabPayload>;
/**
 * Model PedidoDet
 *
 */
export type PedidoDet = $Result.DefaultSelection<Prisma.$PedidoDetPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Productos
   * const productos = await prisma.producto.findMany()
   * ```
   */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Stocks
   * const stocks = await prisma.stock.findMany()
   * ```
   */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoInventario`: Exposes CRUD operations for the **MovimientoInventario** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MovimientoInventarios
   * const movimientoInventarios = await prisma.movimientoInventario.findMany()
   * ```
   */
  get movimientoInventario(): Prisma.MovimientoInventarioDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.pedidoCab`: Exposes CRUD operations for the **PedidoCab** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PedidoCabs
   * const pedidoCabs = await prisma.pedidoCab.findMany()
   * ```
   */
  get pedidoCab(): Prisma.PedidoCabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoDet`: Exposes CRUD operations for the **PedidoDet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PedidoDets
   * const pedidoDets = await prisma.pedidoDet.findMany()
   * ```
   */
  get pedidoDet(): Prisma.PedidoDetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Empresa: 'Empresa';
    Cliente: 'Cliente';
    Categoria: 'Categoria';
    Producto: 'Producto';
    Stock: 'Stock';
    MovimientoInventario: 'MovimientoInventario';
    PedidoCab: 'PedidoCab';
    PedidoDet: 'PedidoDet';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'empresa'
        | 'cliente'
        | 'categoria'
        | 'producto'
        | 'stock'
        | 'movimientoInventario'
        | 'pedidoCab'
        | 'pedidoDet';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>;
        fields: Prisma.EmpresaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[];
          };
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[];
          };
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[];
          };
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>;
          };
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmpresa>;
          };
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmpresaGroupByOutputType>[];
          };
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>;
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number;
          };
        };
      };
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>;
        fields: Prisma.ClienteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[];
          };
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[];
          };
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[];
          };
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>;
          };
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCliente>;
          };
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClienteGroupByOutputType>[];
          };
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>;
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number;
          };
        };
      };
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>;
        fields: Prisma.CategoriaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
          };
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
          };
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
          };
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>;
          };
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategoria>;
          };
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoriaGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number;
          };
        };
      };
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>;
        fields: Prisma.ProductoFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[];
          };
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[];
          };
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[];
          };
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>;
          };
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProducto>;
          };
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductoGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number;
          };
        };
      };
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>;
        fields: Prisma.StockFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[];
          };
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[];
          };
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[];
          };
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StockPayload>;
          };
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStock>;
          };
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StockGroupByOutputType>[];
          };
          count: {
            args: Prisma.StockCountArgs<ExtArgs>;
            result: $Utils.Optional<StockCountAggregateOutputType> | number;
          };
        };
      };
      MovimientoInventario: {
        payload: Prisma.$MovimientoInventarioPayload<ExtArgs>;
        fields: Prisma.MovimientoInventarioFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          findFirst: {
            args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          findMany: {
            args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
          };
          create: {
            args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          createMany: {
            args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
          };
          delete: {
            args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          update: {
            args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          deleteMany: {
            args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
          };
          upsert: {
            args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
          };
          aggregate: {
            args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovimientoInventario>;
          };
          groupBy: {
            args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovimientoInventarioGroupByOutputType>[];
          };
          count: {
            args: Prisma.MovimientoInventarioCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MovimientoInventarioCountAggregateOutputType>
              | number;
          };
        };
      };
      PedidoCab: {
        payload: Prisma.$PedidoCabPayload<ExtArgs>;
        fields: Prisma.PedidoCabFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PedidoCabFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PedidoCabFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          findFirst: {
            args: Prisma.PedidoCabFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PedidoCabFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          findMany: {
            args: Prisma.PedidoCabFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>[];
          };
          create: {
            args: Prisma.PedidoCabCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          createMany: {
            args: Prisma.PedidoCabCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PedidoCabCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>[];
          };
          delete: {
            args: Prisma.PedidoCabDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          update: {
            args: Prisma.PedidoCabUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          deleteMany: {
            args: Prisma.PedidoCabDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PedidoCabUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PedidoCabUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>[];
          };
          upsert: {
            args: Prisma.PedidoCabUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoCabPayload>;
          };
          aggregate: {
            args: Prisma.PedidoCabAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePedidoCab>;
          };
          groupBy: {
            args: Prisma.PedidoCabGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PedidoCabGroupByOutputType>[];
          };
          count: {
            args: Prisma.PedidoCabCountArgs<ExtArgs>;
            result: $Utils.Optional<PedidoCabCountAggregateOutputType> | number;
          };
        };
      };
      PedidoDet: {
        payload: Prisma.$PedidoDetPayload<ExtArgs>;
        fields: Prisma.PedidoDetFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PedidoDetFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PedidoDetFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          findFirst: {
            args: Prisma.PedidoDetFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PedidoDetFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          findMany: {
            args: Prisma.PedidoDetFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>[];
          };
          create: {
            args: Prisma.PedidoDetCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          createMany: {
            args: Prisma.PedidoDetCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PedidoDetCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>[];
          };
          delete: {
            args: Prisma.PedidoDetDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          update: {
            args: Prisma.PedidoDetUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          deleteMany: {
            args: Prisma.PedidoDetDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PedidoDetUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PedidoDetUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>[];
          };
          upsert: {
            args: Prisma.PedidoDetUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PedidoDetPayload>;
          };
          aggregate: {
            args: Prisma.PedidoDetAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePedidoDet>;
          };
          groupBy: {
            args: Prisma.PedidoDetGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PedidoDetGroupByOutputType>[];
          };
          count: {
            args: Prisma.PedidoDetCountArgs<ExtArgs>;
            result: $Utils.Optional<PedidoDetCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit;
    cliente?: ClienteOmit;
    categoria?: CategoriaOmit;
    producto?: ProductoOmit;
    stock?: StockOmit;
    movimientoInventario?: MovimientoInventarioOmit;
    pedidoCab?: PedidoCabOmit;
    pedidoDet?: PedidoDetOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number;
  };

  export type ClienteCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs;
  };

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PedidoCabWhereInput;
  };

  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    subcategorias: number;
    productos: number;
  };

  export type CategoriaCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subcategorias?: boolean | CategoriaCountOutputTypeCountSubcategoriasArgs;
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs;
  };

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSubcategoriasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoriaWhereInput;
  };

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductoWhereInput;
  };

  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    stocks: number;
    movimientos: number;
    pedidosDetalle: number;
  };

  export type ProductoCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    stocks?: boolean | ProductoCountOutputTypeCountStocksArgs;
    movimientos?: boolean | ProductoCountOutputTypeCountMovimientosArgs;
    pedidosDetalle?: boolean | ProductoCountOutputTypeCountPedidosDetalleArgs;
  };

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountStocksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StockWhereInput;
  };

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountMovimientosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovimientoInventarioWhereInput;
  };

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPedidosDetalleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PedidoDetWhereInput;
  };

  /**
   * Count Type PedidoCabCountOutputType
   */

  export type PedidoCabCountOutputType = {
    detalles: number;
  };

  export type PedidoCabCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    detalles?: boolean | PedidoCabCountOutputTypeCountDetallesArgs;
  };

  // Custom InputTypes
  /**
   * PedidoCabCountOutputType without action
   */
  export type PedidoCabCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCabCountOutputType
     */
    select?: PedidoCabCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PedidoCabCountOutputType without action
   */
  export type PedidoCabCountOutputTypeCountDetallesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PedidoDetWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null;
    _avg: EmpresaAvgAggregateOutputType | null;
    _sum: EmpresaSumAggregateOutputType | null;
    _min: EmpresaMinAggregateOutputType | null;
    _max: EmpresaMaxAggregateOutputType | null;
  };

  export type EmpresaAvgAggregateOutputType = {
    id: number | null;
  };

  export type EmpresaSumAggregateOutputType = {
    id: number | null;
  };

  export type EmpresaMinAggregateOutputType = {
    id: number | null;
    ruc: string | null;
    razonSocial: string | null;
    direccion: string | null;
    codUbigeo: string | null;
    estado: string | null;
  };

  export type EmpresaMaxAggregateOutputType = {
    id: number | null;
    ruc: string | null;
    razonSocial: string | null;
    direccion: string | null;
    codUbigeo: string | null;
    estado: string | null;
  };

  export type EmpresaCountAggregateOutputType = {
    id: number;
    ruc: number;
    razonSocial: number;
    direccion: number;
    codUbigeo: number;
    estado: number;
    _all: number;
  };

  export type EmpresaAvgAggregateInputType = {
    id?: true;
  };

  export type EmpresaSumAggregateInputType = {
    id?: true;
  };

  export type EmpresaMinAggregateInputType = {
    id?: true;
    ruc?: true;
    razonSocial?: true;
    direccion?: true;
    codUbigeo?: true;
    estado?: true;
  };

  export type EmpresaMaxAggregateInputType = {
    id?: true;
    ruc?: true;
    razonSocial?: true;
    direccion?: true;
    codUbigeo?: true;
    estado?: true;
  };

  export type EmpresaCountAggregateInputType = {
    id?: true;
    ruc?: true;
    razonSocial?: true;
    direccion?: true;
    codUbigeo?: true;
    estado?: true;
    _all?: true;
  };

  export type EmpresaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Empresas to fetch.
     */
    orderBy?:
      | EmpresaOrderByWithRelationInput
      | EmpresaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Empresas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Empresas
     **/
    _count?: true | EmpresaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmpresaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmpresaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmpresaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmpresaMaxAggregateInputType;
  };

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
    [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>;
  };

  export type EmpresaGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmpresaWhereInput;
    orderBy?:
      | EmpresaOrderByWithAggregationInput
      | EmpresaOrderByWithAggregationInput[];
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum;
    having?: EmpresaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmpresaCountAggregateInputType | true;
    _avg?: EmpresaAvgAggregateInputType;
    _sum?: EmpresaSumAggregateInputType;
    _min?: EmpresaMinAggregateInputType;
    _max?: EmpresaMaxAggregateInputType;
  };

  export type EmpresaGroupByOutputType = {
    id: number;
    ruc: string;
    razonSocial: string;
    direccion: string;
    codUbigeo: string;
    estado: string;
    _count: EmpresaCountAggregateOutputType | null;
    _avg: EmpresaAvgAggregateOutputType | null;
    _sum: EmpresaSumAggregateOutputType | null;
    _min: EmpresaMinAggregateOutputType | null;
    _max: EmpresaMaxAggregateOutputType | null;
  };

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EmpresaGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EmpresaGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>;
        }
      >
    >;

  export type EmpresaSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      ruc?: boolean;
      razonSocial?: boolean;
      direccion?: boolean;
      codUbigeo?: boolean;
      estado?: boolean;
    },
    ExtArgs['result']['empresa']
  >;

  export type EmpresaSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      ruc?: boolean;
      razonSocial?: boolean;
      direccion?: boolean;
      codUbigeo?: boolean;
      estado?: boolean;
    },
    ExtArgs['result']['empresa']
  >;

  export type EmpresaSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      ruc?: boolean;
      razonSocial?: boolean;
      direccion?: boolean;
      codUbigeo?: boolean;
      estado?: boolean;
    },
    ExtArgs['result']['empresa']
  >;

  export type EmpresaSelectScalar = {
    id?: boolean;
    ruc?: boolean;
    razonSocial?: boolean;
    direccion?: boolean;
    codUbigeo?: boolean;
    estado?: boolean;
  };

  export type EmpresaOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'ruc' | 'razonSocial' | 'direccion' | 'codUbigeo' | 'estado',
    ExtArgs['result']['empresa']
  >;

  export type $EmpresaPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Empresa';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        ruc: string;
        razonSocial: string;
        direccion: string;
        codUbigeo: string;
        estado: string;
      },
      ExtArgs['result']['empresa']
    >;
    composites: {};
  };

  type EmpresaGetPayload<
    S extends boolean | null | undefined | EmpresaDefaultArgs,
  > = $Result.GetResult<Prisma.$EmpresaPayload, S>;

  type EmpresaCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmpresaCountAggregateInputType | true;
  };

  export interface EmpresaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Empresa'];
      meta: { name: 'Empresa' };
    };
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(
      args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(
      args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     *
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmpresaFindManyArgs>(
      args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     *
     */
    create<T extends EmpresaCreateArgs>(
      args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmpresaCreateManyArgs>(
      args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     *
     */
    delete<T extends EmpresaDeleteArgs>(
      args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmpresaUpdateArgs>(
      args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(
      args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmpresaUpdateManyArgs>(
      args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(
      args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>,
    ): Prisma__EmpresaClient<
      $Result.GetResult<
        Prisma.$EmpresaPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
     **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmpresaAggregateArgs>(
      args: Subset<T, EmpresaAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>;

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEmpresaGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Empresa model
     */
    readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<'Empresa', 'Int'>;
    readonly ruc: FieldRef<'Empresa', 'String'>;
    readonly razonSocial: FieldRef<'Empresa', 'String'>;
    readonly direccion: FieldRef<'Empresa', 'String'>;
    readonly codUbigeo: FieldRef<'Empresa', 'String'>;
    readonly estado: FieldRef<'Empresa', 'String'>;
  }

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput;
  };

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput;
  };

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Empresas to fetch.
     */
    orderBy?:
      | EmpresaOrderByWithRelationInput
      | EmpresaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Empresas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[];
  };

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Empresas to fetch.
     */
    orderBy?:
      | EmpresaOrderByWithRelationInput
      | EmpresaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Empresas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[];
  };

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Empresas to fetch.
     */
    orderBy?:
      | EmpresaOrderByWithRelationInput
      | EmpresaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Empresas.
     */
    skip?: number;
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[];
  };

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>;
  };

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>;
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput;
  };

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>;
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput;
    /**
     * Limit how many Empresas to update.
     */
    limit?: number;
  };

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>;
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput;
    /**
     * Limit how many Empresas to update.
     */
    limit?: number;
  };

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput;
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>;
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>;
  };

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput;
  };

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput;
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number;
  };

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null;
  };

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
  };

  export type ClienteAvgAggregateOutputType = {
    id: number | null;
  };

  export type ClienteSumAggregateOutputType = {
    id: number | null;
  };

  export type ClienteMinAggregateOutputType = {
    id: number | null;
    nombres: string | null;
    apePaterno: string | null;
    apeMaterno: string | null;
    celular: string | null;
    email: string | null;
    direccion: string | null;
    codPostal: string | null;
    estado: string | null;
  };

  export type ClienteMaxAggregateOutputType = {
    id: number | null;
    nombres: string | null;
    apePaterno: string | null;
    apeMaterno: string | null;
    celular: string | null;
    email: string | null;
    direccion: string | null;
    codPostal: string | null;
    estado: string | null;
  };

  export type ClienteCountAggregateOutputType = {
    id: number;
    nombres: number;
    apePaterno: number;
    apeMaterno: number;
    celular: number;
    email: number;
    direccion: number;
    codPostal: number;
    estado: number;
    _all: number;
  };

  export type ClienteAvgAggregateInputType = {
    id?: true;
  };

  export type ClienteSumAggregateInputType = {
    id?: true;
  };

  export type ClienteMinAggregateInputType = {
    id?: true;
    nombres?: true;
    apePaterno?: true;
    apeMaterno?: true;
    celular?: true;
    email?: true;
    direccion?: true;
    codPostal?: true;
    estado?: true;
  };

  export type ClienteMaxAggregateInputType = {
    id?: true;
    nombres?: true;
    apePaterno?: true;
    apeMaterno?: true;
    celular?: true;
    email?: true;
    direccion?: true;
    codPostal?: true;
    estado?: true;
  };

  export type ClienteCountAggregateInputType = {
    id?: true;
    nombres?: true;
    apePaterno?: true;
    apeMaterno?: true;
    celular?: true;
    email?: true;
    direccion?: true;
    codPostal?: true;
    estado?: true;
    _all?: true;
  };

  export type ClienteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?:
      | ClienteOrderByWithRelationInput
      | ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clientes
     **/
    _count?: true | ClienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ClienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ClienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClienteMaxAggregateInputType;
  };

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>;
  };

  export type ClienteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClienteWhereInput;
    orderBy?:
      | ClienteOrderByWithAggregationInput
      | ClienteOrderByWithAggregationInput[];
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum;
    having?: ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
  };

  export type ClienteGroupByOutputType = {
    id: number;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
  };

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ClienteGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ClienteGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>;
        }
      >
    >;

  export type ClienteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombres?: boolean;
      apePaterno?: boolean;
      apeMaterno?: boolean;
      celular?: boolean;
      email?: boolean;
      direccion?: boolean;
      codPostal?: boolean;
      estado?: boolean;
      pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>;
      _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cliente']
  >;

  export type ClienteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombres?: boolean;
      apePaterno?: boolean;
      apeMaterno?: boolean;
      celular?: boolean;
      email?: boolean;
      direccion?: boolean;
      codPostal?: boolean;
      estado?: boolean;
    },
    ExtArgs['result']['cliente']
  >;

  export type ClienteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombres?: boolean;
      apePaterno?: boolean;
      apeMaterno?: boolean;
      celular?: boolean;
      email?: boolean;
      direccion?: boolean;
      codPostal?: boolean;
      estado?: boolean;
    },
    ExtArgs['result']['cliente']
  >;

  export type ClienteSelectScalar = {
    id?: boolean;
    nombres?: boolean;
    apePaterno?: boolean;
    apeMaterno?: boolean;
    celular?: boolean;
    email?: boolean;
    direccion?: boolean;
    codPostal?: boolean;
    estado?: boolean;
  };

  export type ClienteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'nombres'
    | 'apePaterno'
    | 'apeMaterno'
    | 'celular'
    | 'email'
    | 'direccion'
    | 'codPostal'
    | 'estado',
    ExtArgs['result']['cliente']
  >;
  export type ClienteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>;
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ClienteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ClienteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ClientePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Cliente';
    objects: {
      pedidos: Prisma.$PedidoCabPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        nombres: string;
        apePaterno: string;
        apeMaterno: string;
        celular: string;
        email: string;
        direccion: string;
        codPostal: string;
        estado: string;
      },
      ExtArgs['result']['cliente']
    >;
    composites: {};
  };

  type ClienteGetPayload<
    S extends boolean | null | undefined | ClienteDefaultArgs,
  > = $Result.GetResult<Prisma.$ClientePayload, S>;

  type ClienteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
  };

  export interface ClienteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
      meta: { name: 'Cliente' };
    };
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(
      args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(
      args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     *
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClienteFindManyArgs>(
      args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     *
     */
    create<T extends ClienteCreateArgs>(
      args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClienteCreateManyArgs>(
      args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     *
     */
    delete<T extends ClienteDeleteArgs>(
      args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClienteUpdateArgs>(
      args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClienteDeleteManyArgs>(
      args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClienteUpdateManyArgs>(
      args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(
      args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      $Result.GetResult<
        Prisma.$ClientePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
     **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ClienteAggregateArgs>(
      args: Subset<T, ClienteAggregateArgs>,
    ): Prisma.PrismaPromise<GetClienteAggregateType<T>>;

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetClienteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cliente model
     */
    readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(
      args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PedidoCabPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<'Cliente', 'Int'>;
    readonly nombres: FieldRef<'Cliente', 'String'>;
    readonly apePaterno: FieldRef<'Cliente', 'String'>;
    readonly apeMaterno: FieldRef<'Cliente', 'String'>;
    readonly celular: FieldRef<'Cliente', 'String'>;
    readonly email: FieldRef<'Cliente', 'String'>;
    readonly direccion: FieldRef<'Cliente', 'String'>;
    readonly codPostal: FieldRef<'Cliente', 'String'>;
    readonly estado: FieldRef<'Cliente', 'String'>;
  }

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput;
  };

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput;
  };

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?:
      | ClienteOrderByWithRelationInput
      | ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[];
  };

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?:
      | ClienteOrderByWithRelationInput
      | ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[];
  };

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?:
      | ClienteOrderByWithRelationInput
      | ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[];
  };

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>;
  };

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>;
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput;
  };

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>;
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput;
    /**
     * Limit how many Clientes to update.
     */
    limit?: number;
  };

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>;
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput;
    /**
     * Limit how many Clientes to update.
     */
    limit?: number;
  };

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput;
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>;
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>;
  };

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput;
  };

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput;
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number;
  };

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    where?: PedidoCabWhereInput;
    orderBy?:
      | PedidoCabOrderByWithRelationInput
      | PedidoCabOrderByWithRelationInput[];
    cursor?: PedidoCabWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PedidoCabScalarFieldEnum | PedidoCabScalarFieldEnum[];
  };

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null;
  };

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
  };

  export type CategoriaAvgAggregateOutputType = {
    id: number | null;
    categoriaPadreId: number | null;
  };

  export type CategoriaSumAggregateOutputType = {
    id: number | null;
    categoriaPadreId: number | null;
  };

  export type CategoriaMinAggregateOutputType = {
    id: number | null;
    codigo: string | null;
    tipo: string | null;
    descripcion: string | null;
    imagenUrl: string | null;
    estado: string | null;
    categoriaPadreId: number | null;
  };

  export type CategoriaMaxAggregateOutputType = {
    id: number | null;
    codigo: string | null;
    tipo: string | null;
    descripcion: string | null;
    imagenUrl: string | null;
    estado: string | null;
    categoriaPadreId: number | null;
  };

  export type CategoriaCountAggregateOutputType = {
    id: number;
    codigo: number;
    tipo: number;
    descripcion: number;
    imagenUrl: number;
    estado: number;
    categoriaPadreId: number;
    _all: number;
  };

  export type CategoriaAvgAggregateInputType = {
    id?: true;
    categoriaPadreId?: true;
  };

  export type CategoriaSumAggregateInputType = {
    id?: true;
    categoriaPadreId?: true;
  };

  export type CategoriaMinAggregateInputType = {
    id?: true;
    codigo?: true;
    tipo?: true;
    descripcion?: true;
    imagenUrl?: true;
    estado?: true;
    categoriaPadreId?: true;
  };

  export type CategoriaMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    tipo?: true;
    descripcion?: true;
    imagenUrl?: true;
    estado?: true;
    categoriaPadreId?: true;
  };

  export type CategoriaCountAggregateInputType = {
    id?: true;
    codigo?: true;
    tipo?: true;
    descripcion?: true;
    imagenUrl?: true;
    estado?: true;
    categoriaPadreId?: true;
    _all?: true;
  };

  export type CategoriaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?:
      | CategoriaOrderByWithRelationInput
      | CategoriaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categorias
     **/
    _count?: true | CategoriaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoriaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategoriaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoriaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoriaMaxAggregateInputType;
  };

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>;
  };

  export type CategoriaGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoriaWhereInput;
    orderBy?:
      | CategoriaOrderByWithAggregationInput
      | CategoriaOrderByWithAggregationInput[];
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum;
    having?: CategoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriaCountAggregateInputType | true;
    _avg?: CategoriaAvgAggregateInputType;
    _sum?: CategoriaSumAggregateInputType;
    _min?: CategoriaMinAggregateInputType;
    _max?: CategoriaMaxAggregateInputType;
  };

  export type CategoriaGroupByOutputType = {
    id: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl: string | null;
    estado: string;
    categoriaPadreId: number | null;
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
  };

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoriaGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoriaGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>;
        }
      >
    >;

  export type CategoriaSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      tipo?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      estado?: boolean;
      categoriaPadreId?: boolean;
      categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
      subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>;
      productos?: boolean | Categoria$productosArgs<ExtArgs>;
      _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoria']
  >;

  export type CategoriaSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      tipo?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      estado?: boolean;
      categoriaPadreId?: boolean;
      categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
    },
    ExtArgs['result']['categoria']
  >;

  export type CategoriaSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      tipo?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      estado?: boolean;
      categoriaPadreId?: boolean;
      categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
    },
    ExtArgs['result']['categoria']
  >;

  export type CategoriaSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    imagenUrl?: boolean;
    estado?: boolean;
    categoriaPadreId?: boolean;
  };

  export type CategoriaOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'codigo'
    | 'tipo'
    | 'descripcion'
    | 'imagenUrl'
    | 'estado'
    | 'categoriaPadreId',
    ExtArgs['result']['categoria']
  >;
  export type CategoriaInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
    subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>;
    productos?: boolean | Categoria$productosArgs<ExtArgs>;
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoriaIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
  };
  export type CategoriaIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoriaPadre?: boolean | Categoria$categoriaPadreArgs<ExtArgs>;
  };

  export type $CategoriaPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Categoria';
    objects: {
      categoriaPadre: Prisma.$CategoriaPayload<ExtArgs> | null;
      subcategorias: Prisma.$CategoriaPayload<ExtArgs>[];
      productos: Prisma.$ProductoPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        codigo: string;
        tipo: string;
        descripcion: string;
        imagenUrl: string | null;
        estado: string;
        categoriaPadreId: number | null;
      },
      ExtArgs['result']['categoria']
    >;
    composites: {};
  };

  type CategoriaGetPayload<
    S extends boolean | null | undefined | CategoriaDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoriaPayload, S>;

  type CategoriaCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CategoriaFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoriaCountAggregateInputType | true;
  };

  export interface CategoriaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Categoria'];
      meta: { name: 'Categoria' };
    };
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(
      args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(
      args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     *
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoriaFindManyArgs>(
      args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     *
     */
    create<T extends CategoriaCreateArgs>(
      args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoriaCreateManyArgs>(
      args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     *
     */
    delete<T extends CategoriaDeleteArgs>(
      args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoriaUpdateArgs>(
      args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(
      args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoriaUpdateManyArgs>(
      args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(
      args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
     **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoriaAggregateArgs>(
      args: Subset<T, CategoriaAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>;

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoriaGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Categoria model
     */
    readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    categoriaPadre<T extends Categoria$categoriaPadreArgs<ExtArgs> = {}>(
      args?: Subset<T, Categoria$categoriaPadreArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      $Result.GetResult<
        Prisma.$CategoriaPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    subcategorias<T extends Categoria$subcategoriasArgs<ExtArgs> = {}>(
      args?: Subset<T, Categoria$subcategoriasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoriaPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(
      args?: Subset<T, Categoria$productosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProductoPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<'Categoria', 'Int'>;
    readonly codigo: FieldRef<'Categoria', 'String'>;
    readonly tipo: FieldRef<'Categoria', 'String'>;
    readonly descripcion: FieldRef<'Categoria', 'String'>;
    readonly imagenUrl: FieldRef<'Categoria', 'String'>;
    readonly estado: FieldRef<'Categoria', 'String'>;
    readonly categoriaPadreId: FieldRef<'Categoria', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput;
  };

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput;
  };

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?:
      | CategoriaOrderByWithRelationInput
      | CategoriaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[];
  };

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?:
      | CategoriaOrderByWithRelationInput
      | CategoriaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[];
  };

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?:
      | CategoriaOrderByWithRelationInput
      | CategoriaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[];
  };

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>;
  };

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>;
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput;
  };

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<
      CategoriaUpdateManyMutationInput,
      CategoriaUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput;
    /**
     * Limit how many Categorias to update.
     */
    limit?: number;
  };

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * The data used to update Categorias.
     */
    data: XOR<
      CategoriaUpdateManyMutationInput,
      CategoriaUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput;
    /**
     * Limit how many Categorias to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput;
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>;
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>;
  };

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput;
  };

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput;
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number;
  };

  /**
   * Categoria.categoriaPadre
   */
  export type Categoria$categoriaPadreArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    where?: CategoriaWhereInput;
  };

  /**
   * Categoria.subcategorias
   */
  export type Categoria$subcategoriasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
    where?: CategoriaWhereInput;
    orderBy?:
      | CategoriaOrderByWithRelationInput
      | CategoriaOrderByWithRelationInput[];
    cursor?: CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[];
  };

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    where?: ProductoWhereInput;
    orderBy?:
      | ProductoOrderByWithRelationInput
      | ProductoOrderByWithRelationInput[];
    cursor?: ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[];
  };

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null;
  };

  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
  };

  export type ProductoAvgAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    tasaImpuesto: number | null;
    precioVenta: number | null;
  };

  export type ProductoSumAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    tasaImpuesto: number | null;
    precioVenta: number | null;
  };

  export type ProductoMinAggregateOutputType = {
    id: number | null;
    codigo: string | null;
    descripcion: string | null;
    unidadVenta: string | null;
    categoriaId: number | null;
    contenidoUnidad: string | null;
    infoAdicional: string | null;
    fotoUrl: string | null;
    moneda: string | null;
    tasaImpuesto: number | null;
    precioVenta: number | null;
    estado: string | null;
  };

  export type ProductoMaxAggregateOutputType = {
    id: number | null;
    codigo: string | null;
    descripcion: string | null;
    unidadVenta: string | null;
    categoriaId: number | null;
    contenidoUnidad: string | null;
    infoAdicional: string | null;
    fotoUrl: string | null;
    moneda: string | null;
    tasaImpuesto: number | null;
    precioVenta: number | null;
    estado: string | null;
  };

  export type ProductoCountAggregateOutputType = {
    id: number;
    codigo: number;
    descripcion: number;
    unidadVenta: number;
    categoriaId: number;
    contenidoUnidad: number;
    infoAdicional: number;
    fotoUrl: number;
    moneda: number;
    tasaImpuesto: number;
    precioVenta: number;
    estado: number;
    _all: number;
  };

  export type ProductoAvgAggregateInputType = {
    id?: true;
    categoriaId?: true;
    tasaImpuesto?: true;
    precioVenta?: true;
  };

  export type ProductoSumAggregateInputType = {
    id?: true;
    categoriaId?: true;
    tasaImpuesto?: true;
    precioVenta?: true;
  };

  export type ProductoMinAggregateInputType = {
    id?: true;
    codigo?: true;
    descripcion?: true;
    unidadVenta?: true;
    categoriaId?: true;
    contenidoUnidad?: true;
    infoAdicional?: true;
    fotoUrl?: true;
    moneda?: true;
    tasaImpuesto?: true;
    precioVenta?: true;
    estado?: true;
  };

  export type ProductoMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    descripcion?: true;
    unidadVenta?: true;
    categoriaId?: true;
    contenidoUnidad?: true;
    infoAdicional?: true;
    fotoUrl?: true;
    moneda?: true;
    tasaImpuesto?: true;
    precioVenta?: true;
    estado?: true;
  };

  export type ProductoCountAggregateInputType = {
    id?: true;
    codigo?: true;
    descripcion?: true;
    unidadVenta?: true;
    categoriaId?: true;
    contenidoUnidad?: true;
    infoAdicional?: true;
    fotoUrl?: true;
    moneda?: true;
    tasaImpuesto?: true;
    precioVenta?: true;
    estado?: true;
    _all?: true;
  };

  export type ProductoAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?:
      | ProductoOrderByWithRelationInput
      | ProductoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Productos
     **/
    _count?: true | ProductoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductoMaxAggregateInputType;
  };

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>;
  };

  export type ProductoGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductoWhereInput;
    orderBy?:
      | ProductoOrderByWithAggregationInput
      | ProductoOrderByWithAggregationInput[];
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum;
    having?: ProductoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoCountAggregateInputType | true;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
  };

  export type ProductoGroupByOutputType = {
    id: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional: string | null;
    fotoUrl: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
  };

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductoGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductoGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      descripcion?: boolean;
      unidadVenta?: boolean;
      categoriaId?: boolean;
      contenidoUnidad?: boolean;
      infoAdicional?: boolean;
      fotoUrl?: boolean;
      moneda?: boolean;
      tasaImpuesto?: boolean;
      precioVenta?: boolean;
      estado?: boolean;
      categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
      stocks?: boolean | Producto$stocksArgs<ExtArgs>;
      movimientos?: boolean | Producto$movimientosArgs<ExtArgs>;
      pedidosDetalle?: boolean | Producto$pedidosDetalleArgs<ExtArgs>;
      _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['producto']
  >;

  export type ProductoSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      descripcion?: boolean;
      unidadVenta?: boolean;
      categoriaId?: boolean;
      contenidoUnidad?: boolean;
      infoAdicional?: boolean;
      fotoUrl?: boolean;
      moneda?: boolean;
      tasaImpuesto?: boolean;
      precioVenta?: boolean;
      estado?: boolean;
      categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['producto']
  >;

  export type ProductoSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      codigo?: boolean;
      descripcion?: boolean;
      unidadVenta?: boolean;
      categoriaId?: boolean;
      contenidoUnidad?: boolean;
      infoAdicional?: boolean;
      fotoUrl?: boolean;
      moneda?: boolean;
      tasaImpuesto?: boolean;
      precioVenta?: boolean;
      estado?: boolean;
      categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['producto']
  >;

  export type ProductoSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    descripcion?: boolean;
    unidadVenta?: boolean;
    categoriaId?: boolean;
    contenidoUnidad?: boolean;
    infoAdicional?: boolean;
    fotoUrl?: boolean;
    moneda?: boolean;
    tasaImpuesto?: boolean;
    precioVenta?: boolean;
    estado?: boolean;
  };

  export type ProductoOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'codigo'
    | 'descripcion'
    | 'unidadVenta'
    | 'categoriaId'
    | 'contenidoUnidad'
    | 'infoAdicional'
    | 'fotoUrl'
    | 'moneda'
    | 'tasaImpuesto'
    | 'precioVenta'
    | 'estado',
    ExtArgs['result']['producto']
  >;
  export type ProductoInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
    stocks?: boolean | Producto$stocksArgs<ExtArgs>;
    movimientos?: boolean | Producto$movimientosArgs<ExtArgs>;
    pedidosDetalle?: boolean | Producto$pedidosDetalleArgs<ExtArgs>;
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProductoIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
  };
  export type ProductoIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>;
  };

  export type $ProductoPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Producto';
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>;
      stocks: Prisma.$StockPayload<ExtArgs>[];
      movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[];
      pedidosDetalle: Prisma.$PedidoDetPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        codigo: string;
        descripcion: string;
        unidadVenta: string;
        categoriaId: number;
        contenidoUnidad: string;
        infoAdicional: string | null;
        fotoUrl: string | null;
        moneda: string;
        tasaImpuesto: number;
        precioVenta: number;
        estado: string;
      },
      ExtArgs['result']['producto']
    >;
    composites: {};
  };

  type ProductoGetPayload<
    S extends boolean | null | undefined | ProductoDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductoPayload, S>;

  type ProductoCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoCountAggregateInputType | true;
  };

  export interface ProductoDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Producto'];
      meta: { name: 'Producto' };
    };
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(
      args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(
      args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     *
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductoFindManyArgs>(
      args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     *
     */
    create<T extends ProductoCreateArgs>(
      args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductoCreateManyArgs>(
      args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     *
     */
    delete<T extends ProductoDeleteArgs>(
      args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductoUpdateArgs>(
      args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductoDeleteManyArgs>(
      args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductoUpdateManyArgs>(
      args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(
      args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      $Result.GetResult<
        Prisma.$ProductoPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
     **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductoAggregateArgs>(
      args: Subset<T, ProductoAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductoAggregateType<T>>;

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetProductoGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Producto model
     */
    readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>,
    ): Prisma__CategoriaClient<
      | $Result.GetResult<
          Prisma.$CategoriaPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    stocks<T extends Producto$stocksArgs<ExtArgs> = {}>(
      args?: Subset<T, Producto$stocksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StockPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    movimientos<T extends Producto$movimientosArgs<ExtArgs> = {}>(
      args?: Subset<T, Producto$movimientosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MovimientoInventarioPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    pedidosDetalle<T extends Producto$pedidosDetalleArgs<ExtArgs> = {}>(
      args?: Subset<T, Producto$pedidosDetalleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PedidoDetPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<'Producto', 'Int'>;
    readonly codigo: FieldRef<'Producto', 'String'>;
    readonly descripcion: FieldRef<'Producto', 'String'>;
    readonly unidadVenta: FieldRef<'Producto', 'String'>;
    readonly categoriaId: FieldRef<'Producto', 'Int'>;
    readonly contenidoUnidad: FieldRef<'Producto', 'String'>;
    readonly infoAdicional: FieldRef<'Producto', 'String'>;
    readonly fotoUrl: FieldRef<'Producto', 'String'>;
    readonly moneda: FieldRef<'Producto', 'String'>;
    readonly tasaImpuesto: FieldRef<'Producto', 'Float'>;
    readonly precioVenta: FieldRef<'Producto', 'Float'>;
    readonly estado: FieldRef<'Producto', 'String'>;
  }

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput;
  };

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput;
  };

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?:
      | ProductoOrderByWithRelationInput
      | ProductoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[];
  };

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?:
      | ProductoOrderByWithRelationInput
      | ProductoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[];
  };

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Productos to fetch.
     */
    orderBy?:
      | ProductoOrderByWithRelationInput
      | ProductoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Productos.
     */
    skip?: number;
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[];
  };

  /**
   * Producto create
   */
  export type ProductoCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>;
  };

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>;
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput;
  };

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Productos.
     */
    data: XOR<
      ProductoUpdateManyMutationInput,
      ProductoUncheckedUpdateManyInput
    >;
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput;
    /**
     * Limit how many Productos to update.
     */
    limit?: number;
  };

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * The data used to update Productos.
     */
    data: XOR<
      ProductoUpdateManyMutationInput,
      ProductoUncheckedUpdateManyInput
    >;
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput;
    /**
     * Limit how many Productos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput;
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>;
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>;
  };

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput;
  };

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput;
    /**
     * Limit how many Productos to delete.
     */
    limit?: number;
  };

  /**
   * Producto.stocks
   */
  export type Producto$stocksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    where?: StockWhereInput;
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[];
    cursor?: StockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * Producto.movimientos
   */
  export type Producto$movimientosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    where?: MovimientoInventarioWhereInput;
    orderBy?:
      | MovimientoInventarioOrderByWithRelationInput
      | MovimientoInventarioOrderByWithRelationInput[];
    cursor?: MovimientoInventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | MovimientoInventarioScalarFieldEnum
      | MovimientoInventarioScalarFieldEnum[];
  };

  /**
   * Producto.pedidosDetalle
   */
  export type Producto$pedidosDetalleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    where?: PedidoDetWhereInput;
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    cursor?: PedidoDetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PedidoDetScalarFieldEnum | PedidoDetScalarFieldEnum[];
  };

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null;
  };

  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null;
    _avg: StockAvgAggregateOutputType | null;
    _sum: StockSumAggregateOutputType | null;
    _min: StockMinAggregateOutputType | null;
    _max: StockMaxAggregateOutputType | null;
  };

  export type StockAvgAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stockFisico: number | null;
    stockComprometido: number | null;
  };

  export type StockSumAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stockFisico: number | null;
    stockComprometido: number | null;
  };

  export type StockMinAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stockFisico: number | null;
    stockComprometido: number | null;
  };

  export type StockMaxAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stockFisico: number | null;
    stockComprometido: number | null;
  };

  export type StockCountAggregateOutputType = {
    id: number;
    productoId: number;
    stockFisico: number;
    stockComprometido: number;
    _all: number;
  };

  export type StockAvgAggregateInputType = {
    id?: true;
    productoId?: true;
    stockFisico?: true;
    stockComprometido?: true;
  };

  export type StockSumAggregateInputType = {
    id?: true;
    productoId?: true;
    stockFisico?: true;
    stockComprometido?: true;
  };

  export type StockMinAggregateInputType = {
    id?: true;
    productoId?: true;
    stockFisico?: true;
    stockComprometido?: true;
  };

  export type StockMaxAggregateInputType = {
    id?: true;
    productoId?: true;
    stockFisico?: true;
    stockComprometido?: true;
  };

  export type StockCountAggregateInputType = {
    id?: true;
    productoId?: true;
    stockFisico?: true;
    stockComprometido?: true;
    _all?: true;
  };

  export type StockAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Stocks
     **/
    _count?: true | StockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StockMaxAggregateInputType;
  };

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
    [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>;
  };

  export type StockGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StockWhereInput;
    orderBy?:
      | StockOrderByWithAggregationInput
      | StockOrderByWithAggregationInput[];
    by: StockScalarFieldEnum[] | StockScalarFieldEnum;
    having?: StockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StockCountAggregateInputType | true;
    _avg?: StockAvgAggregateInputType;
    _sum?: StockSumAggregateInputType;
    _min?: StockMinAggregateInputType;
    _max?: StockMaxAggregateInputType;
  };

  export type StockGroupByOutputType = {
    id: number;
    productoId: number;
    stockFisico: number;
    stockComprometido: number;
    _count: StockCountAggregateOutputType | null;
    _avg: StockAvgAggregateOutputType | null;
    _sum: StockSumAggregateOutputType | null;
    _min: StockMinAggregateOutputType | null;
    _max: StockMaxAggregateOutputType | null;
  };

  type GetStockGroupByPayload<T extends StockGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StockGroupByOutputType, T['by']> & {
          [P in keyof T & keyof StockGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>;
        }
      >
    >;

  export type StockSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productoId?: boolean;
      stockFisico?: boolean;
      stockComprometido?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stock']
  >;

  export type StockSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productoId?: boolean;
      stockFisico?: boolean;
      stockComprometido?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stock']
  >;

  export type StockSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productoId?: boolean;
      stockFisico?: boolean;
      stockComprometido?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stock']
  >;

  export type StockSelectScalar = {
    id?: boolean;
    productoId?: boolean;
    stockFisico?: boolean;
    stockComprometido?: boolean;
  };

  export type StockOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'productoId' | 'stockFisico' | 'stockComprometido',
    ExtArgs['result']['stock']
  >;
  export type StockInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type StockIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type StockIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };

  export type $StockPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Stock';
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        productoId: number;
        stockFisico: number;
        stockComprometido: number;
      },
      ExtArgs['result']['stock']
    >;
    composites: {};
  };

  type StockGetPayload<
    S extends boolean | null | undefined | StockDefaultArgs,
  > = $Result.GetResult<Prisma.$StockPayload, S>;

  type StockCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StockCountAggregateInputType | true;
  };

  export interface StockDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Stock'];
      meta: { name: 'Stock' };
    };
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(
      args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(
      args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     *
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StockFindManyArgs>(
      args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     *
     */
    create<T extends StockCreateArgs>(
      args: SelectSubset<T, StockCreateArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StockCreateManyArgs>(
      args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     *
     */
    delete<T extends StockDeleteArgs>(
      args: SelectSubset<T, StockDeleteArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StockUpdateArgs>(
      args: SelectSubset<T, StockUpdateArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StockDeleteManyArgs>(
      args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StockUpdateManyArgs>(
      args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(
      args: SelectSubset<T, StockUpsertArgs<ExtArgs>>,
    ): Prisma__StockClient<
      $Result.GetResult<
        Prisma.$StockPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
     **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StockAggregateArgs>(
      args: Subset<T, StockAggregateArgs>,
    ): Prisma.PrismaPromise<GetStockAggregateType<T>>;

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetStockGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Stock model
     */
    readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductoDefaultArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      | $Result.GetResult<
          Prisma.$ProductoPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<'Stock', 'Int'>;
    readonly productoId: FieldRef<'Stock', 'Int'>;
    readonly stockFisico: FieldRef<'Stock', 'Int'>;
    readonly stockComprometido: FieldRef<'Stock', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput;
  };

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput;
  };

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stocks.
     */
    skip?: number;
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * Stock create
   */
  export type StockCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>;
  };

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Stock update
   */
  export type StockUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>;
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput;
  };

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>;
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput;
    /**
     * Limit how many Stocks to update.
     */
    limit?: number;
  };

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>;
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput;
    /**
     * Limit how many Stocks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput;
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>;
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>;
  };

  /**
   * Stock delete
   */
  export type StockDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput;
  };

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput;
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number;
  };

  /**
   * Stock without action
   */
  export type StockDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null;
  };

  /**
   * Model MovimientoInventario
   */

  export type AggregateMovimientoInventario = {
    _count: MovimientoInventarioCountAggregateOutputType | null;
    _avg: MovimientoInventarioAvgAggregateOutputType | null;
    _sum: MovimientoInventarioSumAggregateOutputType | null;
    _min: MovimientoInventarioMinAggregateOutputType | null;
    _max: MovimientoInventarioMaxAggregateOutputType | null;
  };

  export type MovimientoInventarioAvgAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    cantidad: number | null;
  };

  export type MovimientoInventarioSumAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    cantidad: number | null;
  };

  export type MovimientoInventarioMinAggregateOutputType = {
    id: number | null;
    tipo: string | null;
    numero: string | null;
    fecha: Date | null;
    signo: string | null;
    productoId: number | null;
    unidadVenta: string | null;
    cantidad: number | null;
    estado: string | null;
  };

  export type MovimientoInventarioMaxAggregateOutputType = {
    id: number | null;
    tipo: string | null;
    numero: string | null;
    fecha: Date | null;
    signo: string | null;
    productoId: number | null;
    unidadVenta: string | null;
    cantidad: number | null;
    estado: string | null;
  };

  export type MovimientoInventarioCountAggregateOutputType = {
    id: number;
    tipo: number;
    numero: number;
    fecha: number;
    signo: number;
    productoId: number;
    unidadVenta: number;
    cantidad: number;
    estado: number;
    _all: number;
  };

  export type MovimientoInventarioAvgAggregateInputType = {
    id?: true;
    productoId?: true;
    cantidad?: true;
  };

  export type MovimientoInventarioSumAggregateInputType = {
    id?: true;
    productoId?: true;
    cantidad?: true;
  };

  export type MovimientoInventarioMinAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    fecha?: true;
    signo?: true;
    productoId?: true;
    unidadVenta?: true;
    cantidad?: true;
    estado?: true;
  };

  export type MovimientoInventarioMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    fecha?: true;
    signo?: true;
    productoId?: true;
    unidadVenta?: true;
    cantidad?: true;
    estado?: true;
  };

  export type MovimientoInventarioCountAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    fecha?: true;
    signo?: true;
    productoId?: true;
    unidadVenta?: true;
    cantidad?: true;
    estado?: true;
    _all?: true;
  };

  export type MovimientoInventarioAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovimientoInventario to aggregate.
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?:
      | MovimientoInventarioOrderByWithRelationInput
      | MovimientoInventarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovimientoInventarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MovimientoInventarios
     **/
    _count?: true | MovimientoInventarioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovimientoInventarioAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovimientoInventarioSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovimientoInventarioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovimientoInventarioMaxAggregateInputType;
  };

  export type GetMovimientoInventarioAggregateType<
    T extends MovimientoInventarioAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMovimientoInventario]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoInventario[P]>
      : GetScalarType<T[P], AggregateMovimientoInventario[P]>;
  };

  export type MovimientoInventarioGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovimientoInventarioWhereInput;
    orderBy?:
      | MovimientoInventarioOrderByWithAggregationInput
      | MovimientoInventarioOrderByWithAggregationInput[];
    by:
      | MovimientoInventarioScalarFieldEnum[]
      | MovimientoInventarioScalarFieldEnum;
    having?: MovimientoInventarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovimientoInventarioCountAggregateInputType | true;
    _avg?: MovimientoInventarioAvgAggregateInputType;
    _sum?: MovimientoInventarioSumAggregateInputType;
    _min?: MovimientoInventarioMinAggregateInputType;
    _max?: MovimientoInventarioMaxAggregateInputType;
  };

  export type MovimientoInventarioGroupByOutputType = {
    id: number;
    tipo: string;
    numero: string;
    fecha: Date;
    signo: string;
    productoId: number;
    unidadVenta: string;
    cantidad: number;
    estado: string;
    _count: MovimientoInventarioCountAggregateOutputType | null;
    _avg: MovimientoInventarioAvgAggregateOutputType | null;
    _sum: MovimientoInventarioSumAggregateOutputType | null;
    _min: MovimientoInventarioMinAggregateOutputType | null;
    _max: MovimientoInventarioMaxAggregateOutputType | null;
  };

  type GetMovimientoInventarioGroupByPayload<
    T extends MovimientoInventarioGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoInventarioGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof MovimientoInventarioGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
          : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>;
      }
    >
  >;

  export type MovimientoInventarioSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      fecha?: boolean;
      signo?: boolean;
      productoId?: boolean;
      unidadVenta?: boolean;
      cantidad?: boolean;
      estado?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movimientoInventario']
  >;

  export type MovimientoInventarioSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      fecha?: boolean;
      signo?: boolean;
      productoId?: boolean;
      unidadVenta?: boolean;
      cantidad?: boolean;
      estado?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movimientoInventario']
  >;

  export type MovimientoInventarioSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      fecha?: boolean;
      signo?: boolean;
      productoId?: boolean;
      unidadVenta?: boolean;
      cantidad?: boolean;
      estado?: boolean;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movimientoInventario']
  >;

  export type MovimientoInventarioSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    numero?: boolean;
    fecha?: boolean;
    signo?: boolean;
    productoId?: boolean;
    unidadVenta?: boolean;
    cantidad?: boolean;
    estado?: boolean;
  };

  export type MovimientoInventarioOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'tipo'
    | 'numero'
    | 'fecha'
    | 'signo'
    | 'productoId'
    | 'unidadVenta'
    | 'cantidad'
    | 'estado',
    ExtArgs['result']['movimientoInventario']
  >;
  export type MovimientoInventarioInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type MovimientoInventarioIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type MovimientoInventarioIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };

  export type $MovimientoInventarioPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MovimientoInventario';
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        tipo: string;
        numero: string;
        fecha: Date;
        signo: string;
        productoId: number;
        unidadVenta: string;
        cantidad: number;
        estado: string;
      },
      ExtArgs['result']['movimientoInventario']
    >;
    composites: {};
  };

  type MovimientoInventarioGetPayload<
    S extends boolean | null | undefined | MovimientoInventarioDefaultArgs,
  > = $Result.GetResult<Prisma.$MovimientoInventarioPayload, S>;

  type MovimientoInventarioCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MovimientoInventarioFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MovimientoInventarioCountAggregateInputType | true;
  };

  export interface MovimientoInventarioDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MovimientoInventario'];
      meta: { name: 'MovimientoInventario' };
    };
    /**
     * Find zero or one MovimientoInventario that matches the filter.
     * @param {MovimientoInventarioFindUniqueArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoInventarioFindUniqueArgs>(
      args: SelectSubset<T, MovimientoInventarioFindUniqueArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MovimientoInventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoInventarioFindUniqueOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoInventarioFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MovimientoInventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoInventarioFindFirstArgs>(
      args?: SelectSubset<T, MovimientoInventarioFindFirstArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MovimientoInventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoInventarioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MovimientoInventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany()
     *
     * // Get first 10 MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovimientoInventarioFindManyArgs>(
      args?: SelectSubset<T, MovimientoInventarioFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MovimientoInventario.
     * @param {MovimientoInventarioCreateArgs} args - Arguments to create a MovimientoInventario.
     * @example
     * // Create one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.create({
     *   data: {
     *     // ... data to create a MovimientoInventario
     *   }
     * })
     *
     */
    create<T extends MovimientoInventarioCreateArgs>(
      args: SelectSubset<T, MovimientoInventarioCreateArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MovimientoInventarios.
     * @param {MovimientoInventarioCreateManyArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovimientoInventarioCreateManyArgs>(
      args?: SelectSubset<T, MovimientoInventarioCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MovimientoInventarios and returns the data saved in the database.
     * @param {MovimientoInventarioCreateManyAndReturnArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MovimientoInventarioCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MovimientoInventario.
     * @param {MovimientoInventarioDeleteArgs} args - Arguments to delete one MovimientoInventario.
     * @example
     * // Delete one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.delete({
     *   where: {
     *     // ... filter to delete one MovimientoInventario
     *   }
     * })
     *
     */
    delete<T extends MovimientoInventarioDeleteArgs>(
      args: SelectSubset<T, MovimientoInventarioDeleteArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MovimientoInventario.
     * @param {MovimientoInventarioUpdateArgs} args - Arguments to update one MovimientoInventario.
     * @example
     * // Update one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovimientoInventarioUpdateArgs>(
      args: SelectSubset<T, MovimientoInventarioUpdateArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MovimientoInventarios.
     * @param {MovimientoInventarioDeleteManyArgs} args - Arguments to filter MovimientoInventarios to delete.
     * @example
     * // Delete a few MovimientoInventarios
     * const { count } = await prisma.movimientoInventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovimientoInventarioDeleteManyArgs>(
      args?: SelectSubset<T, MovimientoInventarioDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovimientoInventarioUpdateManyArgs>(
      args: SelectSubset<T, MovimientoInventarioUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MovimientoInventarios and returns the data updated in the database.
     * @param {MovimientoInventarioUpdateManyAndReturnArgs} args - Arguments to update many MovimientoInventarios.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MovimientoInventarioUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MovimientoInventario.
     * @param {MovimientoInventarioUpsertArgs} args - Arguments to update or create a MovimientoInventario.
     * @example
     * // Update or create a MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.upsert({
     *   create: {
     *     // ... data to create a MovimientoInventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoInventario we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoInventarioUpsertArgs>(
      args: SelectSubset<T, MovimientoInventarioUpsertArgs<ExtArgs>>,
    ): Prisma__MovimientoInventarioClient<
      $Result.GetResult<
        Prisma.$MovimientoInventarioPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioCountArgs} args - Arguments to filter MovimientoInventarios to count.
     * @example
     * // Count the number of MovimientoInventarios
     * const count = await prisma.movimientoInventario.count({
     *   where: {
     *     // ... the filter for the MovimientoInventarios we want to count
     *   }
     * })
     **/
    count<T extends MovimientoInventarioCountArgs>(
      args?: Subset<T, MovimientoInventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              MovimientoInventarioCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovimientoInventarioAggregateArgs>(
      args: Subset<T, MovimientoInventarioAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovimientoInventarioAggregateType<T>>;

    /**
     * Group by MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MovimientoInventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoInventarioGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoInventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MovimientoInventarioGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMovimientoInventarioGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MovimientoInventario model
     */
    readonly fields: MovimientoInventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoInventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoInventarioClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductoDefaultArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      | $Result.GetResult<
          Prisma.$ProductoPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MovimientoInventario model
   */
  interface MovimientoInventarioFieldRefs {
    readonly id: FieldRef<'MovimientoInventario', 'Int'>;
    readonly tipo: FieldRef<'MovimientoInventario', 'String'>;
    readonly numero: FieldRef<'MovimientoInventario', 'String'>;
    readonly fecha: FieldRef<'MovimientoInventario', 'DateTime'>;
    readonly signo: FieldRef<'MovimientoInventario', 'String'>;
    readonly productoId: FieldRef<'MovimientoInventario', 'Int'>;
    readonly unidadVenta: FieldRef<'MovimientoInventario', 'String'>;
    readonly cantidad: FieldRef<'MovimientoInventario', 'Int'>;
    readonly estado: FieldRef<'MovimientoInventario', 'String'>;
  }

  // Custom InputTypes
  /**
   * MovimientoInventario findUnique
   */
  export type MovimientoInventarioFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput;
  };

  /**
   * MovimientoInventario findUniqueOrThrow
   */
  export type MovimientoInventarioFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput;
  };

  /**
   * MovimientoInventario findFirst
   */
  export type MovimientoInventarioFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?:
      | MovimientoInventarioOrderByWithRelationInput
      | MovimientoInventarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?:
      | MovimientoInventarioScalarFieldEnum
      | MovimientoInventarioScalarFieldEnum[];
  };

  /**
   * MovimientoInventario findFirstOrThrow
   */
  export type MovimientoInventarioFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?:
      | MovimientoInventarioOrderByWithRelationInput
      | MovimientoInventarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?:
      | MovimientoInventarioScalarFieldEnum
      | MovimientoInventarioScalarFieldEnum[];
  };

  /**
   * MovimientoInventario findMany
   */
  export type MovimientoInventarioFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter, which MovimientoInventarios to fetch.
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?:
      | MovimientoInventarioOrderByWithRelationInput
      | MovimientoInventarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number;
    distinct?:
      | MovimientoInventarioScalarFieldEnum
      | MovimientoInventarioScalarFieldEnum[];
  };

  /**
   * MovimientoInventario create
   */
  export type MovimientoInventarioCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * The data needed to create a MovimientoInventario.
     */
    data: XOR<
      MovimientoInventarioCreateInput,
      MovimientoInventarioUncheckedCreateInput
    >;
  };

  /**
   * MovimientoInventario createMany
   */
  export type MovimientoInventarioCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MovimientoInventarios.
     */
    data:
      | MovimientoInventarioCreateManyInput
      | MovimientoInventarioCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MovimientoInventario createManyAndReturn
   */
  export type MovimientoInventarioCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * The data used to create many MovimientoInventarios.
     */
    data:
      | MovimientoInventarioCreateManyInput
      | MovimientoInventarioCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MovimientoInventario update
   */
  export type MovimientoInventarioUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * The data needed to update a MovimientoInventario.
     */
    data: XOR<
      MovimientoInventarioUpdateInput,
      MovimientoInventarioUncheckedUpdateInput
    >;
    /**
     * Choose, which MovimientoInventario to update.
     */
    where: MovimientoInventarioWhereUniqueInput;
  };

  /**
   * MovimientoInventario updateMany
   */
  export type MovimientoInventarioUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<
      MovimientoInventarioUpdateManyMutationInput,
      MovimientoInventarioUncheckedUpdateManyInput
    >;
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number;
  };

  /**
   * MovimientoInventario updateManyAndReturn
   */
  export type MovimientoInventarioUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<
      MovimientoInventarioUpdateManyMutationInput,
      MovimientoInventarioUncheckedUpdateManyInput
    >;
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MovimientoInventario upsert
   */
  export type MovimientoInventarioUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * The filter to search for the MovimientoInventario to update in case it exists.
     */
    where: MovimientoInventarioWhereUniqueInput;
    /**
     * In case the MovimientoInventario found by the `where` argument doesn't exist, create a new MovimientoInventario with this data.
     */
    create: XOR<
      MovimientoInventarioCreateInput,
      MovimientoInventarioUncheckedCreateInput
    >;
    /**
     * In case the MovimientoInventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MovimientoInventarioUpdateInput,
      MovimientoInventarioUncheckedUpdateInput
    >;
  };

  /**
   * MovimientoInventario delete
   */
  export type MovimientoInventarioDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
    /**
     * Filter which MovimientoInventario to delete.
     */
    where: MovimientoInventarioWhereUniqueInput;
  };

  /**
   * MovimientoInventario deleteMany
   */
  export type MovimientoInventarioDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MovimientoInventarios to delete
     */
    where?: MovimientoInventarioWhereInput;
    /**
     * Limit how many MovimientoInventarios to delete.
     */
    limit?: number;
  };

  /**
   * MovimientoInventario without action
   */
  export type MovimientoInventarioDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null;
  };

  /**
   * Model PedidoCab
   */

  export type AggregatePedidoCab = {
    _count: PedidoCabCountAggregateOutputType | null;
    _avg: PedidoCabAvgAggregateOutputType | null;
    _sum: PedidoCabSumAggregateOutputType | null;
    _min: PedidoCabMinAggregateOutputType | null;
    _max: PedidoCabMaxAggregateOutputType | null;
  };

  export type PedidoCabAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
  };

  export type PedidoCabSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
  };

  export type PedidoCabMinAggregateOutputType = {
    id: number | null;
    tipo: string | null;
    numero: string | null;
    clienteId: number | null;
    fecha: Date | null;
    direccionEntrega: string | null;
  };

  export type PedidoCabMaxAggregateOutputType = {
    id: number | null;
    tipo: string | null;
    numero: string | null;
    clienteId: number | null;
    fecha: Date | null;
    direccionEntrega: string | null;
  };

  export type PedidoCabCountAggregateOutputType = {
    id: number;
    tipo: number;
    numero: number;
    clienteId: number;
    fecha: number;
    direccionEntrega: number;
    _all: number;
  };

  export type PedidoCabAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
  };

  export type PedidoCabSumAggregateInputType = {
    id?: true;
    clienteId?: true;
  };

  export type PedidoCabMinAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    clienteId?: true;
    fecha?: true;
    direccionEntrega?: true;
  };

  export type PedidoCabMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    clienteId?: true;
    fecha?: true;
    direccionEntrega?: true;
  };

  export type PedidoCabCountAggregateInputType = {
    id?: true;
    tipo?: true;
    numero?: true;
    clienteId?: true;
    fecha?: true;
    direccionEntrega?: true;
    _all?: true;
  };

  export type PedidoCabAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PedidoCab to aggregate.
     */
    where?: PedidoCabWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoCabs to fetch.
     */
    orderBy?:
      | PedidoCabOrderByWithRelationInput
      | PedidoCabOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PedidoCabWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoCabs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoCabs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PedidoCabs
     **/
    _count?: true | PedidoCabCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PedidoCabAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PedidoCabSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PedidoCabMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PedidoCabMaxAggregateInputType;
  };

  export type GetPedidoCabAggregateType<T extends PedidoCabAggregateArgs> = {
    [P in keyof T & keyof AggregatePedidoCab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoCab[P]>
      : GetScalarType<T[P], AggregatePedidoCab[P]>;
  };

  export type PedidoCabGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PedidoCabWhereInput;
    orderBy?:
      | PedidoCabOrderByWithAggregationInput
      | PedidoCabOrderByWithAggregationInput[];
    by: PedidoCabScalarFieldEnum[] | PedidoCabScalarFieldEnum;
    having?: PedidoCabScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCabCountAggregateInputType | true;
    _avg?: PedidoCabAvgAggregateInputType;
    _sum?: PedidoCabSumAggregateInputType;
    _min?: PedidoCabMinAggregateInputType;
    _max?: PedidoCabMaxAggregateInputType;
  };

  export type PedidoCabGroupByOutputType = {
    id: number;
    tipo: string;
    numero: string;
    clienteId: number;
    fecha: Date;
    direccionEntrega: string;
    _count: PedidoCabCountAggregateOutputType | null;
    _avg: PedidoCabAvgAggregateOutputType | null;
    _sum: PedidoCabSumAggregateOutputType | null;
    _min: PedidoCabMinAggregateOutputType | null;
    _max: PedidoCabMaxAggregateOutputType | null;
  };

  type GetPedidoCabGroupByPayload<T extends PedidoCabGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PedidoCabGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PedidoCabGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoCabGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoCabGroupByOutputType[P]>;
        }
      >
    >;

  export type PedidoCabSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      clienteId?: boolean;
      fecha?: boolean;
      direccionEntrega?: boolean;
      cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
      detalles?: boolean | PedidoCab$detallesArgs<ExtArgs>;
      _count?: boolean | PedidoCabCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoCab']
  >;

  export type PedidoCabSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      clienteId?: boolean;
      fecha?: boolean;
      direccionEntrega?: boolean;
      cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoCab']
  >;

  export type PedidoCabSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tipo?: boolean;
      numero?: boolean;
      clienteId?: boolean;
      fecha?: boolean;
      direccionEntrega?: boolean;
      cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoCab']
  >;

  export type PedidoCabSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    numero?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    direccionEntrega?: boolean;
  };

  export type PedidoCabOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'tipo' | 'numero' | 'clienteId' | 'fecha' | 'direccionEntrega',
    ExtArgs['result']['pedidoCab']
  >;
  export type PedidoCabInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
    detalles?: boolean | PedidoCab$detallesArgs<ExtArgs>;
    _count?: boolean | PedidoCabCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PedidoCabIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
  };
  export type PedidoCabIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>;
  };

  export type $PedidoCabPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PedidoCab';
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>;
      detalles: Prisma.$PedidoDetPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        tipo: string;
        numero: string;
        clienteId: number;
        fecha: Date;
        direccionEntrega: string;
      },
      ExtArgs['result']['pedidoCab']
    >;
    composites: {};
  };

  type PedidoCabGetPayload<
    S extends boolean | null | undefined | PedidoCabDefaultArgs,
  > = $Result.GetResult<Prisma.$PedidoCabPayload, S>;

  type PedidoCabCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PedidoCabFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PedidoCabCountAggregateInputType | true;
  };

  export interface PedidoCabDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PedidoCab'];
      meta: { name: 'PedidoCab' };
    };
    /**
     * Find zero or one PedidoCab that matches the filter.
     * @param {PedidoCabFindUniqueArgs} args - Arguments to find a PedidoCab
     * @example
     * // Get one PedidoCab
     * const pedidoCab = await prisma.pedidoCab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoCabFindUniqueArgs>(
      args: SelectSubset<T, PedidoCabFindUniqueArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PedidoCab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoCabFindUniqueOrThrowArgs} args - Arguments to find a PedidoCab
     * @example
     * // Get one PedidoCab
     * const pedidoCab = await prisma.pedidoCab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoCabFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PedidoCabFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PedidoCab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabFindFirstArgs} args - Arguments to find a PedidoCab
     * @example
     * // Get one PedidoCab
     * const pedidoCab = await prisma.pedidoCab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoCabFindFirstArgs>(
      args?: SelectSubset<T, PedidoCabFindFirstArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PedidoCab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabFindFirstOrThrowArgs} args - Arguments to find a PedidoCab
     * @example
     * // Get one PedidoCab
     * const pedidoCab = await prisma.pedidoCab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoCabFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PedidoCabFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PedidoCabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoCabs
     * const pedidoCabs = await prisma.pedidoCab.findMany()
     *
     * // Get first 10 PedidoCabs
     * const pedidoCabs = await prisma.pedidoCab.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pedidoCabWithIdOnly = await prisma.pedidoCab.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PedidoCabFindManyArgs>(
      args?: SelectSubset<T, PedidoCabFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PedidoCab.
     * @param {PedidoCabCreateArgs} args - Arguments to create a PedidoCab.
     * @example
     * // Create one PedidoCab
     * const PedidoCab = await prisma.pedidoCab.create({
     *   data: {
     *     // ... data to create a PedidoCab
     *   }
     * })
     *
     */
    create<T extends PedidoCabCreateArgs>(
      args: SelectSubset<T, PedidoCabCreateArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PedidoCabs.
     * @param {PedidoCabCreateManyArgs} args - Arguments to create many PedidoCabs.
     * @example
     * // Create many PedidoCabs
     * const pedidoCab = await prisma.pedidoCab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PedidoCabCreateManyArgs>(
      args?: SelectSubset<T, PedidoCabCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PedidoCabs and returns the data saved in the database.
     * @param {PedidoCabCreateManyAndReturnArgs} args - Arguments to create many PedidoCabs.
     * @example
     * // Create many PedidoCabs
     * const pedidoCab = await prisma.pedidoCab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PedidoCabs and only return the `id`
     * const pedidoCabWithIdOnly = await prisma.pedidoCab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PedidoCabCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PedidoCabCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PedidoCab.
     * @param {PedidoCabDeleteArgs} args - Arguments to delete one PedidoCab.
     * @example
     * // Delete one PedidoCab
     * const PedidoCab = await prisma.pedidoCab.delete({
     *   where: {
     *     // ... filter to delete one PedidoCab
     *   }
     * })
     *
     */
    delete<T extends PedidoCabDeleteArgs>(
      args: SelectSubset<T, PedidoCabDeleteArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PedidoCab.
     * @param {PedidoCabUpdateArgs} args - Arguments to update one PedidoCab.
     * @example
     * // Update one PedidoCab
     * const pedidoCab = await prisma.pedidoCab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PedidoCabUpdateArgs>(
      args: SelectSubset<T, PedidoCabUpdateArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PedidoCabs.
     * @param {PedidoCabDeleteManyArgs} args - Arguments to filter PedidoCabs to delete.
     * @example
     * // Delete a few PedidoCabs
     * const { count } = await prisma.pedidoCab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PedidoCabDeleteManyArgs>(
      args?: SelectSubset<T, PedidoCabDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PedidoCabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoCabs
     * const pedidoCab = await prisma.pedidoCab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PedidoCabUpdateManyArgs>(
      args: SelectSubset<T, PedidoCabUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PedidoCabs and returns the data updated in the database.
     * @param {PedidoCabUpdateManyAndReturnArgs} args - Arguments to update many PedidoCabs.
     * @example
     * // Update many PedidoCabs
     * const pedidoCab = await prisma.pedidoCab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PedidoCabs and only return the `id`
     * const pedidoCabWithIdOnly = await prisma.pedidoCab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PedidoCabUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PedidoCabUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PedidoCab.
     * @param {PedidoCabUpsertArgs} args - Arguments to update or create a PedidoCab.
     * @example
     * // Update or create a PedidoCab
     * const pedidoCab = await prisma.pedidoCab.upsert({
     *   create: {
     *     // ... data to create a PedidoCab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoCab we want to update
     *   }
     * })
     */
    upsert<T extends PedidoCabUpsertArgs>(
      args: SelectSubset<T, PedidoCabUpsertArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      $Result.GetResult<
        Prisma.$PedidoCabPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PedidoCabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabCountArgs} args - Arguments to filter PedidoCabs to count.
     * @example
     * // Count the number of PedidoCabs
     * const count = await prisma.pedidoCab.count({
     *   where: {
     *     // ... the filter for the PedidoCabs we want to count
     *   }
     * })
     **/
    count<T extends PedidoCabCountArgs>(
      args?: Subset<T, PedidoCabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCabCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PedidoCab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PedidoCabAggregateArgs>(
      args: Subset<T, PedidoCabAggregateArgs>,
    ): Prisma.PrismaPromise<GetPedidoCabAggregateType<T>>;

    /**
     * Group by PedidoCab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PedidoCabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoCabGroupByArgs['orderBy'] }
        : { orderBy?: PedidoCabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PedidoCabGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPedidoCabGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PedidoCab model
     */
    readonly fields: PedidoCabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoCab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoCabClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClienteDefaultArgs<ExtArgs>>,
    ): Prisma__ClienteClient<
      | $Result.GetResult<
          Prisma.$ClientePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    detalles<T extends PedidoCab$detallesArgs<ExtArgs> = {}>(
      args?: Subset<T, PedidoCab$detallesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PedidoDetPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PedidoCab model
   */
  interface PedidoCabFieldRefs {
    readonly id: FieldRef<'PedidoCab', 'Int'>;
    readonly tipo: FieldRef<'PedidoCab', 'String'>;
    readonly numero: FieldRef<'PedidoCab', 'String'>;
    readonly clienteId: FieldRef<'PedidoCab', 'Int'>;
    readonly fecha: FieldRef<'PedidoCab', 'DateTime'>;
    readonly direccionEntrega: FieldRef<'PedidoCab', 'String'>;
  }

  // Custom InputTypes
  /**
   * PedidoCab findUnique
   */
  export type PedidoCabFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoCab to fetch.
     */
    where: PedidoCabWhereUniqueInput;
  };

  /**
   * PedidoCab findUniqueOrThrow
   */
  export type PedidoCabFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoCab to fetch.
     */
    where: PedidoCabWhereUniqueInput;
  };

  /**
   * PedidoCab findFirst
   */
  export type PedidoCabFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoCab to fetch.
     */
    where?: PedidoCabWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoCabs to fetch.
     */
    orderBy?:
      | PedidoCabOrderByWithRelationInput
      | PedidoCabOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PedidoCabs.
     */
    cursor?: PedidoCabWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoCabs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoCabs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PedidoCabs.
     */
    distinct?: PedidoCabScalarFieldEnum | PedidoCabScalarFieldEnum[];
  };

  /**
   * PedidoCab findFirstOrThrow
   */
  export type PedidoCabFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoCab to fetch.
     */
    where?: PedidoCabWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoCabs to fetch.
     */
    orderBy?:
      | PedidoCabOrderByWithRelationInput
      | PedidoCabOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PedidoCabs.
     */
    cursor?: PedidoCabWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoCabs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoCabs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PedidoCabs.
     */
    distinct?: PedidoCabScalarFieldEnum | PedidoCabScalarFieldEnum[];
  };

  /**
   * PedidoCab findMany
   */
  export type PedidoCabFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoCabs to fetch.
     */
    where?: PedidoCabWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoCabs to fetch.
     */
    orderBy?:
      | PedidoCabOrderByWithRelationInput
      | PedidoCabOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PedidoCabs.
     */
    cursor?: PedidoCabWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoCabs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoCabs.
     */
    skip?: number;
    distinct?: PedidoCabScalarFieldEnum | PedidoCabScalarFieldEnum[];
  };

  /**
   * PedidoCab create
   */
  export type PedidoCabCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * The data needed to create a PedidoCab.
     */
    data: XOR<PedidoCabCreateInput, PedidoCabUncheckedCreateInput>;
  };

  /**
   * PedidoCab createMany
   */
  export type PedidoCabCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PedidoCabs.
     */
    data: PedidoCabCreateManyInput | PedidoCabCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PedidoCab createManyAndReturn
   */
  export type PedidoCabCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * The data used to create many PedidoCabs.
     */
    data: PedidoCabCreateManyInput | PedidoCabCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PedidoCab update
   */
  export type PedidoCabUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * The data needed to update a PedidoCab.
     */
    data: XOR<PedidoCabUpdateInput, PedidoCabUncheckedUpdateInput>;
    /**
     * Choose, which PedidoCab to update.
     */
    where: PedidoCabWhereUniqueInput;
  };

  /**
   * PedidoCab updateMany
   */
  export type PedidoCabUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PedidoCabs.
     */
    data: XOR<
      PedidoCabUpdateManyMutationInput,
      PedidoCabUncheckedUpdateManyInput
    >;
    /**
     * Filter which PedidoCabs to update
     */
    where?: PedidoCabWhereInput;
    /**
     * Limit how many PedidoCabs to update.
     */
    limit?: number;
  };

  /**
   * PedidoCab updateManyAndReturn
   */
  export type PedidoCabUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * The data used to update PedidoCabs.
     */
    data: XOR<
      PedidoCabUpdateManyMutationInput,
      PedidoCabUncheckedUpdateManyInput
    >;
    /**
     * Filter which PedidoCabs to update
     */
    where?: PedidoCabWhereInput;
    /**
     * Limit how many PedidoCabs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PedidoCab upsert
   */
  export type PedidoCabUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * The filter to search for the PedidoCab to update in case it exists.
     */
    where: PedidoCabWhereUniqueInput;
    /**
     * In case the PedidoCab found by the `where` argument doesn't exist, create a new PedidoCab with this data.
     */
    create: XOR<PedidoCabCreateInput, PedidoCabUncheckedCreateInput>;
    /**
     * In case the PedidoCab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoCabUpdateInput, PedidoCabUncheckedUpdateInput>;
  };

  /**
   * PedidoCab delete
   */
  export type PedidoCabDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
    /**
     * Filter which PedidoCab to delete.
     */
    where: PedidoCabWhereUniqueInput;
  };

  /**
   * PedidoCab deleteMany
   */
  export type PedidoCabDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PedidoCabs to delete
     */
    where?: PedidoCabWhereInput;
    /**
     * Limit how many PedidoCabs to delete.
     */
    limit?: number;
  };

  /**
   * PedidoCab.detalles
   */
  export type PedidoCab$detallesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    where?: PedidoDetWhereInput;
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    cursor?: PedidoDetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PedidoDetScalarFieldEnum | PedidoDetScalarFieldEnum[];
  };

  /**
   * PedidoCab without action
   */
  export type PedidoCabDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoCab
     */
    select?: PedidoCabSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoCab
     */
    omit?: PedidoCabOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoCabInclude<ExtArgs> | null;
  };

  /**
   * Model PedidoDet
   */

  export type AggregatePedidoDet = {
    _count: PedidoDetCountAggregateOutputType | null;
    _avg: PedidoDetAvgAggregateOutputType | null;
    _sum: PedidoDetSumAggregateOutputType | null;
    _min: PedidoDetMinAggregateOutputType | null;
    _max: PedidoDetMaxAggregateOutputType | null;
  };

  export type PedidoDetAvgAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    valorUnitario: number | null;
    tasaImpuesto: number | null;
    precioUnitario: number | null;
    precioTotal: number | null;
  };

  export type PedidoDetSumAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    valorUnitario: number | null;
    tasaImpuesto: number | null;
    precioUnitario: number | null;
    precioTotal: number | null;
  };

  export type PedidoDetMinAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    valorUnitario: number | null;
    tasaImpuesto: number | null;
    precioUnitario: number | null;
    precioTotal: number | null;
  };

  export type PedidoDetMaxAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    valorUnitario: number | null;
    tasaImpuesto: number | null;
    precioUnitario: number | null;
    precioTotal: number | null;
  };

  export type PedidoDetCountAggregateOutputType = {
    id: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
    _all: number;
  };

  export type PedidoDetAvgAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    valorUnitario?: true;
    tasaImpuesto?: true;
    precioUnitario?: true;
    precioTotal?: true;
  };

  export type PedidoDetSumAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    valorUnitario?: true;
    tasaImpuesto?: true;
    precioUnitario?: true;
    precioTotal?: true;
  };

  export type PedidoDetMinAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    valorUnitario?: true;
    tasaImpuesto?: true;
    precioUnitario?: true;
    precioTotal?: true;
  };

  export type PedidoDetMaxAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    valorUnitario?: true;
    tasaImpuesto?: true;
    precioUnitario?: true;
    precioTotal?: true;
  };

  export type PedidoDetCountAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    valorUnitario?: true;
    tasaImpuesto?: true;
    precioUnitario?: true;
    precioTotal?: true;
    _all?: true;
  };

  export type PedidoDetAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PedidoDet to aggregate.
     */
    where?: PedidoDetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoDets to fetch.
     */
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PedidoDetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoDets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoDets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PedidoDets
     **/
    _count?: true | PedidoDetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PedidoDetAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PedidoDetSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PedidoDetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PedidoDetMaxAggregateInputType;
  };

  export type GetPedidoDetAggregateType<T extends PedidoDetAggregateArgs> = {
    [P in keyof T & keyof AggregatePedidoDet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoDet[P]>
      : GetScalarType<T[P], AggregatePedidoDet[P]>;
  };

  export type PedidoDetGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PedidoDetWhereInput;
    orderBy?:
      | PedidoDetOrderByWithAggregationInput
      | PedidoDetOrderByWithAggregationInput[];
    by: PedidoDetScalarFieldEnum[] | PedidoDetScalarFieldEnum;
    having?: PedidoDetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoDetCountAggregateInputType | true;
    _avg?: PedidoDetAvgAggregateInputType;
    _sum?: PedidoDetSumAggregateInputType;
    _min?: PedidoDetMinAggregateInputType;
    _max?: PedidoDetMaxAggregateInputType;
  };

  export type PedidoDetGroupByOutputType = {
    id: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
    _count: PedidoDetCountAggregateOutputType | null;
    _avg: PedidoDetAvgAggregateOutputType | null;
    _sum: PedidoDetSumAggregateOutputType | null;
    _min: PedidoDetMinAggregateOutputType | null;
    _max: PedidoDetMaxAggregateOutputType | null;
  };

  type GetPedidoDetGroupByPayload<T extends PedidoDetGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PedidoDetGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PedidoDetGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoDetGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoDetGroupByOutputType[P]>;
        }
      >
    >;

  export type PedidoDetSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pedidoId?: boolean;
      productoId?: boolean;
      cantidad?: boolean;
      valorUnitario?: boolean;
      tasaImpuesto?: boolean;
      precioUnitario?: boolean;
      precioTotal?: boolean;
      pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoDet']
  >;

  export type PedidoDetSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pedidoId?: boolean;
      productoId?: boolean;
      cantidad?: boolean;
      valorUnitario?: boolean;
      tasaImpuesto?: boolean;
      precioUnitario?: boolean;
      precioTotal?: boolean;
      pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoDet']
  >;

  export type PedidoDetSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pedidoId?: boolean;
      productoId?: boolean;
      cantidad?: boolean;
      valorUnitario?: boolean;
      tasaImpuesto?: boolean;
      precioUnitario?: boolean;
      precioTotal?: boolean;
      pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
      producto?: boolean | ProductoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pedidoDet']
  >;

  export type PedidoDetSelectScalar = {
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    valorUnitario?: boolean;
    tasaImpuesto?: boolean;
    precioUnitario?: boolean;
    precioTotal?: boolean;
  };

  export type PedidoDetOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'pedidoId'
    | 'productoId'
    | 'cantidad'
    | 'valorUnitario'
    | 'tasaImpuesto'
    | 'precioUnitario'
    | 'precioTotal',
    ExtArgs['result']['pedidoDet']
  >;
  export type PedidoDetInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type PedidoDetIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };
  export type PedidoDetIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pedido?: boolean | PedidoCabDefaultArgs<ExtArgs>;
    producto?: boolean | ProductoDefaultArgs<ExtArgs>;
  };

  export type $PedidoDetPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PedidoDet';
    objects: {
      pedido: Prisma.$PedidoCabPayload<ExtArgs>;
      producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        pedidoId: number;
        productoId: number;
        cantidad: number;
        valorUnitario: number;
        tasaImpuesto: number;
        precioUnitario: number;
        precioTotal: number;
      },
      ExtArgs['result']['pedidoDet']
    >;
    composites: {};
  };

  type PedidoDetGetPayload<
    S extends boolean | null | undefined | PedidoDetDefaultArgs,
  > = $Result.GetResult<Prisma.$PedidoDetPayload, S>;

  type PedidoDetCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PedidoDetFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PedidoDetCountAggregateInputType | true;
  };

  export interface PedidoDetDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PedidoDet'];
      meta: { name: 'PedidoDet' };
    };
    /**
     * Find zero or one PedidoDet that matches the filter.
     * @param {PedidoDetFindUniqueArgs} args - Arguments to find a PedidoDet
     * @example
     * // Get one PedidoDet
     * const pedidoDet = await prisma.pedidoDet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoDetFindUniqueArgs>(
      args: SelectSubset<T, PedidoDetFindUniqueArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PedidoDet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoDetFindUniqueOrThrowArgs} args - Arguments to find a PedidoDet
     * @example
     * // Get one PedidoDet
     * const pedidoDet = await prisma.pedidoDet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoDetFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PedidoDetFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PedidoDet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetFindFirstArgs} args - Arguments to find a PedidoDet
     * @example
     * // Get one PedidoDet
     * const pedidoDet = await prisma.pedidoDet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoDetFindFirstArgs>(
      args?: SelectSubset<T, PedidoDetFindFirstArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PedidoDet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetFindFirstOrThrowArgs} args - Arguments to find a PedidoDet
     * @example
     * // Get one PedidoDet
     * const pedidoDet = await prisma.pedidoDet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoDetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PedidoDetFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PedidoDets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoDets
     * const pedidoDets = await prisma.pedidoDet.findMany()
     *
     * // Get first 10 PedidoDets
     * const pedidoDets = await prisma.pedidoDet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pedidoDetWithIdOnly = await prisma.pedidoDet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PedidoDetFindManyArgs>(
      args?: SelectSubset<T, PedidoDetFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PedidoDet.
     * @param {PedidoDetCreateArgs} args - Arguments to create a PedidoDet.
     * @example
     * // Create one PedidoDet
     * const PedidoDet = await prisma.pedidoDet.create({
     *   data: {
     *     // ... data to create a PedidoDet
     *   }
     * })
     *
     */
    create<T extends PedidoDetCreateArgs>(
      args: SelectSubset<T, PedidoDetCreateArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PedidoDets.
     * @param {PedidoDetCreateManyArgs} args - Arguments to create many PedidoDets.
     * @example
     * // Create many PedidoDets
     * const pedidoDet = await prisma.pedidoDet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PedidoDetCreateManyArgs>(
      args?: SelectSubset<T, PedidoDetCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PedidoDets and returns the data saved in the database.
     * @param {PedidoDetCreateManyAndReturnArgs} args - Arguments to create many PedidoDets.
     * @example
     * // Create many PedidoDets
     * const pedidoDet = await prisma.pedidoDet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PedidoDets and only return the `id`
     * const pedidoDetWithIdOnly = await prisma.pedidoDet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PedidoDetCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PedidoDetCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PedidoDet.
     * @param {PedidoDetDeleteArgs} args - Arguments to delete one PedidoDet.
     * @example
     * // Delete one PedidoDet
     * const PedidoDet = await prisma.pedidoDet.delete({
     *   where: {
     *     // ... filter to delete one PedidoDet
     *   }
     * })
     *
     */
    delete<T extends PedidoDetDeleteArgs>(
      args: SelectSubset<T, PedidoDetDeleteArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PedidoDet.
     * @param {PedidoDetUpdateArgs} args - Arguments to update one PedidoDet.
     * @example
     * // Update one PedidoDet
     * const pedidoDet = await prisma.pedidoDet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PedidoDetUpdateArgs>(
      args: SelectSubset<T, PedidoDetUpdateArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PedidoDets.
     * @param {PedidoDetDeleteManyArgs} args - Arguments to filter PedidoDets to delete.
     * @example
     * // Delete a few PedidoDets
     * const { count } = await prisma.pedidoDet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PedidoDetDeleteManyArgs>(
      args?: SelectSubset<T, PedidoDetDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PedidoDets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoDets
     * const pedidoDet = await prisma.pedidoDet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PedidoDetUpdateManyArgs>(
      args: SelectSubset<T, PedidoDetUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PedidoDets and returns the data updated in the database.
     * @param {PedidoDetUpdateManyAndReturnArgs} args - Arguments to update many PedidoDets.
     * @example
     * // Update many PedidoDets
     * const pedidoDet = await prisma.pedidoDet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PedidoDets and only return the `id`
     * const pedidoDetWithIdOnly = await prisma.pedidoDet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PedidoDetUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PedidoDetUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PedidoDet.
     * @param {PedidoDetUpsertArgs} args - Arguments to update or create a PedidoDet.
     * @example
     * // Update or create a PedidoDet
     * const pedidoDet = await prisma.pedidoDet.upsert({
     *   create: {
     *     // ... data to create a PedidoDet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoDet we want to update
     *   }
     * })
     */
    upsert<T extends PedidoDetUpsertArgs>(
      args: SelectSubset<T, PedidoDetUpsertArgs<ExtArgs>>,
    ): Prisma__PedidoDetClient<
      $Result.GetResult<
        Prisma.$PedidoDetPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PedidoDets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetCountArgs} args - Arguments to filter PedidoDets to count.
     * @example
     * // Count the number of PedidoDets
     * const count = await prisma.pedidoDet.count({
     *   where: {
     *     // ... the filter for the PedidoDets we want to count
     *   }
     * })
     **/
    count<T extends PedidoDetCountArgs>(
      args?: Subset<T, PedidoDetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoDetCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PedidoDet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PedidoDetAggregateArgs>(
      args: Subset<T, PedidoDetAggregateArgs>,
    ): Prisma.PrismaPromise<GetPedidoDetAggregateType<T>>;

    /**
     * Group by PedidoDet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PedidoDetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoDetGroupByArgs['orderBy'] }
        : { orderBy?: PedidoDetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PedidoDetGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPedidoDetGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PedidoDet model
     */
    readonly fields: PedidoDetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoDet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoDetClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    pedido<T extends PedidoCabDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PedidoCabDefaultArgs<ExtArgs>>,
    ): Prisma__PedidoCabClient<
      | $Result.GetResult<
          Prisma.$PedidoCabPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductoDefaultArgs<ExtArgs>>,
    ): Prisma__ProductoClient<
      | $Result.GetResult<
          Prisma.$ProductoPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PedidoDet model
   */
  interface PedidoDetFieldRefs {
    readonly id: FieldRef<'PedidoDet', 'Int'>;
    readonly pedidoId: FieldRef<'PedidoDet', 'Int'>;
    readonly productoId: FieldRef<'PedidoDet', 'Int'>;
    readonly cantidad: FieldRef<'PedidoDet', 'Int'>;
    readonly valorUnitario: FieldRef<'PedidoDet', 'Float'>;
    readonly tasaImpuesto: FieldRef<'PedidoDet', 'Float'>;
    readonly precioUnitario: FieldRef<'PedidoDet', 'Float'>;
    readonly precioTotal: FieldRef<'PedidoDet', 'Float'>;
  }

  // Custom InputTypes
  /**
   * PedidoDet findUnique
   */
  export type PedidoDetFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoDet to fetch.
     */
    where: PedidoDetWhereUniqueInput;
  };

  /**
   * PedidoDet findUniqueOrThrow
   */
  export type PedidoDetFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoDet to fetch.
     */
    where: PedidoDetWhereUniqueInput;
  };

  /**
   * PedidoDet findFirst
   */
  export type PedidoDetFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoDet to fetch.
     */
    where?: PedidoDetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoDets to fetch.
     */
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PedidoDets.
     */
    cursor?: PedidoDetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoDets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoDets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PedidoDets.
     */
    distinct?: PedidoDetScalarFieldEnum | PedidoDetScalarFieldEnum[];
  };

  /**
   * PedidoDet findFirstOrThrow
   */
  export type PedidoDetFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoDet to fetch.
     */
    where?: PedidoDetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoDets to fetch.
     */
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PedidoDets.
     */
    cursor?: PedidoDetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoDets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoDets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PedidoDets.
     */
    distinct?: PedidoDetScalarFieldEnum | PedidoDetScalarFieldEnum[];
  };

  /**
   * PedidoDet findMany
   */
  export type PedidoDetFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter, which PedidoDets to fetch.
     */
    where?: PedidoDetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PedidoDets to fetch.
     */
    orderBy?:
      | PedidoDetOrderByWithRelationInput
      | PedidoDetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PedidoDets.
     */
    cursor?: PedidoDetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PedidoDets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PedidoDets.
     */
    skip?: number;
    distinct?: PedidoDetScalarFieldEnum | PedidoDetScalarFieldEnum[];
  };

  /**
   * PedidoDet create
   */
  export type PedidoDetCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * The data needed to create a PedidoDet.
     */
    data: XOR<PedidoDetCreateInput, PedidoDetUncheckedCreateInput>;
  };

  /**
   * PedidoDet createMany
   */
  export type PedidoDetCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PedidoDets.
     */
    data: PedidoDetCreateManyInput | PedidoDetCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PedidoDet createManyAndReturn
   */
  export type PedidoDetCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * The data used to create many PedidoDets.
     */
    data: PedidoDetCreateManyInput | PedidoDetCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PedidoDet update
   */
  export type PedidoDetUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * The data needed to update a PedidoDet.
     */
    data: XOR<PedidoDetUpdateInput, PedidoDetUncheckedUpdateInput>;
    /**
     * Choose, which PedidoDet to update.
     */
    where: PedidoDetWhereUniqueInput;
  };

  /**
   * PedidoDet updateMany
   */
  export type PedidoDetUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PedidoDets.
     */
    data: XOR<
      PedidoDetUpdateManyMutationInput,
      PedidoDetUncheckedUpdateManyInput
    >;
    /**
     * Filter which PedidoDets to update
     */
    where?: PedidoDetWhereInput;
    /**
     * Limit how many PedidoDets to update.
     */
    limit?: number;
  };

  /**
   * PedidoDet updateManyAndReturn
   */
  export type PedidoDetUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * The data used to update PedidoDets.
     */
    data: XOR<
      PedidoDetUpdateManyMutationInput,
      PedidoDetUncheckedUpdateManyInput
    >;
    /**
     * Filter which PedidoDets to update
     */
    where?: PedidoDetWhereInput;
    /**
     * Limit how many PedidoDets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PedidoDet upsert
   */
  export type PedidoDetUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * The filter to search for the PedidoDet to update in case it exists.
     */
    where: PedidoDetWhereUniqueInput;
    /**
     * In case the PedidoDet found by the `where` argument doesn't exist, create a new PedidoDet with this data.
     */
    create: XOR<PedidoDetCreateInput, PedidoDetUncheckedCreateInput>;
    /**
     * In case the PedidoDet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoDetUpdateInput, PedidoDetUncheckedUpdateInput>;
  };

  /**
   * PedidoDet delete
   */
  export type PedidoDetDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
    /**
     * Filter which PedidoDet to delete.
     */
    where: PedidoDetWhereUniqueInput;
  };

  /**
   * PedidoDet deleteMany
   */
  export type PedidoDetDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PedidoDets to delete
     */
    where?: PedidoDetWhereInput;
    /**
     * Limit how many PedidoDets to delete.
     */
    limit?: number;
  };

  /**
   * PedidoDet without action
   */
  export type PedidoDetDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PedidoDet
     */
    select?: PedidoDetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PedidoDet
     */
    omit?: PedidoDetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EmpresaScalarFieldEnum: {
    id: 'id';
    ruc: 'ruc';
    razonSocial: 'razonSocial';
    direccion: 'direccion';
    codUbigeo: 'codUbigeo';
    estado: 'estado';
  };

  export type EmpresaScalarFieldEnum =
    (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum];

  export const ClienteScalarFieldEnum: {
    id: 'id';
    nombres: 'nombres';
    apePaterno: 'apePaterno';
    apeMaterno: 'apeMaterno';
    celular: 'celular';
    email: 'email';
    direccion: 'direccion';
    codPostal: 'codPostal';
    estado: 'estado';
  };

  export type ClienteScalarFieldEnum =
    (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];

  export const CategoriaScalarFieldEnum: {
    id: 'id';
    codigo: 'codigo';
    tipo: 'tipo';
    descripcion: 'descripcion';
    imagenUrl: 'imagenUrl';
    estado: 'estado';
    categoriaPadreId: 'categoriaPadreId';
  };

  export type CategoriaScalarFieldEnum =
    (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];

  export const ProductoScalarFieldEnum: {
    id: 'id';
    codigo: 'codigo';
    descripcion: 'descripcion';
    unidadVenta: 'unidadVenta';
    categoriaId: 'categoriaId';
    contenidoUnidad: 'contenidoUnidad';
    infoAdicional: 'infoAdicional';
    fotoUrl: 'fotoUrl';
    moneda: 'moneda';
    tasaImpuesto: 'tasaImpuesto';
    precioVenta: 'precioVenta';
    estado: 'estado';
  };

  export type ProductoScalarFieldEnum =
    (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];

  export const StockScalarFieldEnum: {
    id: 'id';
    productoId: 'productoId';
    stockFisico: 'stockFisico';
    stockComprometido: 'stockComprometido';
  };

  export type StockScalarFieldEnum =
    (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum];

  export const MovimientoInventarioScalarFieldEnum: {
    id: 'id';
    tipo: 'tipo';
    numero: 'numero';
    fecha: 'fecha';
    signo: 'signo';
    productoId: 'productoId';
    unidadVenta: 'unidadVenta';
    cantidad: 'cantidad';
    estado: 'estado';
  };

  export type MovimientoInventarioScalarFieldEnum =
    (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum];

  export const PedidoCabScalarFieldEnum: {
    id: 'id';
    tipo: 'tipo';
    numero: 'numero';
    clienteId: 'clienteId';
    fecha: 'fecha';
    direccionEntrega: 'direccionEntrega';
  };

  export type PedidoCabScalarFieldEnum =
    (typeof PedidoCabScalarFieldEnum)[keyof typeof PedidoCabScalarFieldEnum];

  export const PedidoDetScalarFieldEnum: {
    id: 'id';
    pedidoId: 'pedidoId';
    productoId: 'productoId';
    cantidad: 'cantidad';
    valorUnitario: 'valorUnitario';
    tasaImpuesto: 'tasaImpuesto';
    precioUnitario: 'precioUnitario';
    precioTotal: 'precioTotal';
  };

  export type PedidoDetScalarFieldEnum =
    (typeof PedidoDetScalarFieldEnum)[keyof typeof PedidoDetScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Deep Input Types
   */

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[];
    OR?: EmpresaWhereInput[];
    NOT?: EmpresaWhereInput | EmpresaWhereInput[];
    id?: IntFilter<'Empresa'> | number;
    ruc?: StringFilter<'Empresa'> | string;
    razonSocial?: StringFilter<'Empresa'> | string;
    direccion?: StringFilter<'Empresa'> | string;
    codUbigeo?: StringFilter<'Empresa'> | string;
    estado?: StringFilter<'Empresa'> | string;
  };

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder;
    ruc?: SortOrder;
    razonSocial?: SortOrder;
    direccion?: SortOrder;
    codUbigeo?: SortOrder;
    estado?: SortOrder;
  };

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: EmpresaWhereInput | EmpresaWhereInput[];
      OR?: EmpresaWhereInput[];
      NOT?: EmpresaWhereInput | EmpresaWhereInput[];
      ruc?: StringFilter<'Empresa'> | string;
      razonSocial?: StringFilter<'Empresa'> | string;
      direccion?: StringFilter<'Empresa'> | string;
      codUbigeo?: StringFilter<'Empresa'> | string;
      estado?: StringFilter<'Empresa'> | string;
    },
    'id'
  >;

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder;
    ruc?: SortOrder;
    razonSocial?: SortOrder;
    direccion?: SortOrder;
    codUbigeo?: SortOrder;
    estado?: SortOrder;
    _count?: EmpresaCountOrderByAggregateInput;
    _avg?: EmpresaAvgOrderByAggregateInput;
    _max?: EmpresaMaxOrderByAggregateInput;
    _min?: EmpresaMinOrderByAggregateInput;
    _sum?: EmpresaSumOrderByAggregateInput;
  };

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?:
      | EmpresaScalarWhereWithAggregatesInput
      | EmpresaScalarWhereWithAggregatesInput[];
    OR?: EmpresaScalarWhereWithAggregatesInput[];
    NOT?:
      | EmpresaScalarWhereWithAggregatesInput
      | EmpresaScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Empresa'> | number;
    ruc?: StringWithAggregatesFilter<'Empresa'> | string;
    razonSocial?: StringWithAggregatesFilter<'Empresa'> | string;
    direccion?: StringWithAggregatesFilter<'Empresa'> | string;
    codUbigeo?: StringWithAggregatesFilter<'Empresa'> | string;
    estado?: StringWithAggregatesFilter<'Empresa'> | string;
  };

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[];
    OR?: ClienteWhereInput[];
    NOT?: ClienteWhereInput | ClienteWhereInput[];
    id?: IntFilter<'Cliente'> | number;
    nombres?: StringFilter<'Cliente'> | string;
    apePaterno?: StringFilter<'Cliente'> | string;
    apeMaterno?: StringFilter<'Cliente'> | string;
    celular?: StringFilter<'Cliente'> | string;
    email?: StringFilter<'Cliente'> | string;
    direccion?: StringFilter<'Cliente'> | string;
    codPostal?: StringFilter<'Cliente'> | string;
    estado?: StringFilter<'Cliente'> | string;
    pedidos?: PedidoCabListRelationFilter;
  };

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder;
    nombres?: SortOrder;
    apePaterno?: SortOrder;
    apeMaterno?: SortOrder;
    celular?: SortOrder;
    email?: SortOrder;
    direccion?: SortOrder;
    codPostal?: SortOrder;
    estado?: SortOrder;
    pedidos?: PedidoCabOrderByRelationAggregateInput;
  };

  export type ClienteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ClienteWhereInput | ClienteWhereInput[];
      OR?: ClienteWhereInput[];
      NOT?: ClienteWhereInput | ClienteWhereInput[];
      nombres?: StringFilter<'Cliente'> | string;
      apePaterno?: StringFilter<'Cliente'> | string;
      apeMaterno?: StringFilter<'Cliente'> | string;
      celular?: StringFilter<'Cliente'> | string;
      email?: StringFilter<'Cliente'> | string;
      direccion?: StringFilter<'Cliente'> | string;
      codPostal?: StringFilter<'Cliente'> | string;
      estado?: StringFilter<'Cliente'> | string;
      pedidos?: PedidoCabListRelationFilter;
    },
    'id'
  >;

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder;
    nombres?: SortOrder;
    apePaterno?: SortOrder;
    apeMaterno?: SortOrder;
    celular?: SortOrder;
    email?: SortOrder;
    direccion?: SortOrder;
    codPostal?: SortOrder;
    estado?: SortOrder;
    _count?: ClienteCountOrderByAggregateInput;
    _avg?: ClienteAvgOrderByAggregateInput;
    _max?: ClienteMaxOrderByAggregateInput;
    _min?: ClienteMinOrderByAggregateInput;
    _sum?: ClienteSumOrderByAggregateInput;
  };

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?:
      | ClienteScalarWhereWithAggregatesInput
      | ClienteScalarWhereWithAggregatesInput[];
    OR?: ClienteScalarWhereWithAggregatesInput[];
    NOT?:
      | ClienteScalarWhereWithAggregatesInput
      | ClienteScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Cliente'> | number;
    nombres?: StringWithAggregatesFilter<'Cliente'> | string;
    apePaterno?: StringWithAggregatesFilter<'Cliente'> | string;
    apeMaterno?: StringWithAggregatesFilter<'Cliente'> | string;
    celular?: StringWithAggregatesFilter<'Cliente'> | string;
    email?: StringWithAggregatesFilter<'Cliente'> | string;
    direccion?: StringWithAggregatesFilter<'Cliente'> | string;
    codPostal?: StringWithAggregatesFilter<'Cliente'> | string;
    estado?: StringWithAggregatesFilter<'Cliente'> | string;
  };

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[];
    OR?: CategoriaWhereInput[];
    NOT?: CategoriaWhereInput | CategoriaWhereInput[];
    id?: IntFilter<'Categoria'> | number;
    codigo?: StringFilter<'Categoria'> | string;
    tipo?: StringFilter<'Categoria'> | string;
    descripcion?: StringFilter<'Categoria'> | string;
    imagenUrl?: StringNullableFilter<'Categoria'> | string | null;
    estado?: StringFilter<'Categoria'> | string;
    categoriaPadreId?: IntNullableFilter<'Categoria'> | number | null;
    categoriaPadre?: XOR<
      CategoriaNullableScalarRelationFilter,
      CategoriaWhereInput
    > | null;
    subcategorias?: CategoriaListRelationFilter;
    productos?: ProductoListRelationFilter;
  };

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    tipo?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrderInput | SortOrder;
    estado?: SortOrder;
    categoriaPadreId?: SortOrderInput | SortOrder;
    categoriaPadre?: CategoriaOrderByWithRelationInput;
    subcategorias?: CategoriaOrderByRelationAggregateInput;
    productos?: ProductoOrderByRelationAggregateInput;
  };

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CategoriaWhereInput | CategoriaWhereInput[];
      OR?: CategoriaWhereInput[];
      NOT?: CategoriaWhereInput | CategoriaWhereInput[];
      codigo?: StringFilter<'Categoria'> | string;
      tipo?: StringFilter<'Categoria'> | string;
      descripcion?: StringFilter<'Categoria'> | string;
      imagenUrl?: StringNullableFilter<'Categoria'> | string | null;
      estado?: StringFilter<'Categoria'> | string;
      categoriaPadreId?: IntNullableFilter<'Categoria'> | number | null;
      categoriaPadre?: XOR<
        CategoriaNullableScalarRelationFilter,
        CategoriaWhereInput
      > | null;
      subcategorias?: CategoriaListRelationFilter;
      productos?: ProductoListRelationFilter;
    },
    'id'
  >;

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    tipo?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrderInput | SortOrder;
    estado?: SortOrder;
    categoriaPadreId?: SortOrderInput | SortOrder;
    _count?: CategoriaCountOrderByAggregateInput;
    _avg?: CategoriaAvgOrderByAggregateInput;
    _max?: CategoriaMaxOrderByAggregateInput;
    _min?: CategoriaMinOrderByAggregateInput;
    _sum?: CategoriaSumOrderByAggregateInput;
  };

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?:
      | CategoriaScalarWhereWithAggregatesInput
      | CategoriaScalarWhereWithAggregatesInput[];
    OR?: CategoriaScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoriaScalarWhereWithAggregatesInput
      | CategoriaScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Categoria'> | number;
    codigo?: StringWithAggregatesFilter<'Categoria'> | string;
    tipo?: StringWithAggregatesFilter<'Categoria'> | string;
    descripcion?: StringWithAggregatesFilter<'Categoria'> | string;
    imagenUrl?: StringNullableWithAggregatesFilter<'Categoria'> | string | null;
    estado?: StringWithAggregatesFilter<'Categoria'> | string;
    categoriaPadreId?:
      | IntNullableWithAggregatesFilter<'Categoria'>
      | number
      | null;
  };

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[];
    OR?: ProductoWhereInput[];
    NOT?: ProductoWhereInput | ProductoWhereInput[];
    id?: IntFilter<'Producto'> | number;
    codigo?: StringFilter<'Producto'> | string;
    descripcion?: StringFilter<'Producto'> | string;
    unidadVenta?: StringFilter<'Producto'> | string;
    categoriaId?: IntFilter<'Producto'> | number;
    contenidoUnidad?: StringFilter<'Producto'> | string;
    infoAdicional?: StringNullableFilter<'Producto'> | string | null;
    fotoUrl?: StringNullableFilter<'Producto'> | string | null;
    moneda?: StringFilter<'Producto'> | string;
    tasaImpuesto?: FloatFilter<'Producto'> | number;
    precioVenta?: FloatFilter<'Producto'> | number;
    estado?: StringFilter<'Producto'> | string;
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>;
    stocks?: StockListRelationFilter;
    movimientos?: MovimientoInventarioListRelationFilter;
    pedidosDetalle?: PedidoDetListRelationFilter;
  };

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    descripcion?: SortOrder;
    unidadVenta?: SortOrder;
    categoriaId?: SortOrder;
    contenidoUnidad?: SortOrder;
    infoAdicional?: SortOrderInput | SortOrder;
    fotoUrl?: SortOrderInput | SortOrder;
    moneda?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
    estado?: SortOrder;
    categoria?: CategoriaOrderByWithRelationInput;
    stocks?: StockOrderByRelationAggregateInput;
    movimientos?: MovimientoInventarioOrderByRelationAggregateInput;
    pedidosDetalle?: PedidoDetOrderByRelationAggregateInput;
  };

  export type ProductoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ProductoWhereInput | ProductoWhereInput[];
      OR?: ProductoWhereInput[];
      NOT?: ProductoWhereInput | ProductoWhereInput[];
      codigo?: StringFilter<'Producto'> | string;
      descripcion?: StringFilter<'Producto'> | string;
      unidadVenta?: StringFilter<'Producto'> | string;
      categoriaId?: IntFilter<'Producto'> | number;
      contenidoUnidad?: StringFilter<'Producto'> | string;
      infoAdicional?: StringNullableFilter<'Producto'> | string | null;
      fotoUrl?: StringNullableFilter<'Producto'> | string | null;
      moneda?: StringFilter<'Producto'> | string;
      tasaImpuesto?: FloatFilter<'Producto'> | number;
      precioVenta?: FloatFilter<'Producto'> | number;
      estado?: StringFilter<'Producto'> | string;
      categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>;
      stocks?: StockListRelationFilter;
      movimientos?: MovimientoInventarioListRelationFilter;
      pedidosDetalle?: PedidoDetListRelationFilter;
    },
    'id'
  >;

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    descripcion?: SortOrder;
    unidadVenta?: SortOrder;
    categoriaId?: SortOrder;
    contenidoUnidad?: SortOrder;
    infoAdicional?: SortOrderInput | SortOrder;
    fotoUrl?: SortOrderInput | SortOrder;
    moneda?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
    estado?: SortOrder;
    _count?: ProductoCountOrderByAggregateInput;
    _avg?: ProductoAvgOrderByAggregateInput;
    _max?: ProductoMaxOrderByAggregateInput;
    _min?: ProductoMinOrderByAggregateInput;
    _sum?: ProductoSumOrderByAggregateInput;
  };

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?:
      | ProductoScalarWhereWithAggregatesInput
      | ProductoScalarWhereWithAggregatesInput[];
    OR?: ProductoScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductoScalarWhereWithAggregatesInput
      | ProductoScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Producto'> | number;
    codigo?: StringWithAggregatesFilter<'Producto'> | string;
    descripcion?: StringWithAggregatesFilter<'Producto'> | string;
    unidadVenta?: StringWithAggregatesFilter<'Producto'> | string;
    categoriaId?: IntWithAggregatesFilter<'Producto'> | number;
    contenidoUnidad?: StringWithAggregatesFilter<'Producto'> | string;
    infoAdicional?:
      | StringNullableWithAggregatesFilter<'Producto'>
      | string
      | null;
    fotoUrl?: StringNullableWithAggregatesFilter<'Producto'> | string | null;
    moneda?: StringWithAggregatesFilter<'Producto'> | string;
    tasaImpuesto?: FloatWithAggregatesFilter<'Producto'> | number;
    precioVenta?: FloatWithAggregatesFilter<'Producto'> | number;
    estado?: StringWithAggregatesFilter<'Producto'> | string;
  };

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[];
    OR?: StockWhereInput[];
    NOT?: StockWhereInput | StockWhereInput[];
    id?: IntFilter<'Stock'> | number;
    productoId?: IntFilter<'Stock'> | number;
    stockFisico?: IntFilter<'Stock'> | number;
    stockComprometido?: IntFilter<'Stock'> | number;
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
  };

  export type StockOrderByWithRelationInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
    producto?: ProductoOrderByWithRelationInput;
  };

  export type StockWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: StockWhereInput | StockWhereInput[];
      OR?: StockWhereInput[];
      NOT?: StockWhereInput | StockWhereInput[];
      productoId?: IntFilter<'Stock'> | number;
      stockFisico?: IntFilter<'Stock'> | number;
      stockComprometido?: IntFilter<'Stock'> | number;
      producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
    },
    'id'
  >;

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
    _count?: StockCountOrderByAggregateInput;
    _avg?: StockAvgOrderByAggregateInput;
    _max?: StockMaxOrderByAggregateInput;
    _min?: StockMinOrderByAggregateInput;
    _sum?: StockSumOrderByAggregateInput;
  };

  export type StockScalarWhereWithAggregatesInput = {
    AND?:
      | StockScalarWhereWithAggregatesInput
      | StockScalarWhereWithAggregatesInput[];
    OR?: StockScalarWhereWithAggregatesInput[];
    NOT?:
      | StockScalarWhereWithAggregatesInput
      | StockScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Stock'> | number;
    productoId?: IntWithAggregatesFilter<'Stock'> | number;
    stockFisico?: IntWithAggregatesFilter<'Stock'> | number;
    stockComprometido?: IntWithAggregatesFilter<'Stock'> | number;
  };

  export type MovimientoInventarioWhereInput = {
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[];
    OR?: MovimientoInventarioWhereInput[];
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[];
    id?: IntFilter<'MovimientoInventario'> | number;
    tipo?: StringFilter<'MovimientoInventario'> | string;
    numero?: StringFilter<'MovimientoInventario'> | string;
    fecha?: DateTimeFilter<'MovimientoInventario'> | Date | string;
    signo?: StringFilter<'MovimientoInventario'> | string;
    productoId?: IntFilter<'MovimientoInventario'> | number;
    unidadVenta?: StringFilter<'MovimientoInventario'> | string;
    cantidad?: IntFilter<'MovimientoInventario'> | number;
    estado?: StringFilter<'MovimientoInventario'> | string;
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
  };

  export type MovimientoInventarioOrderByWithRelationInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    fecha?: SortOrder;
    signo?: SortOrder;
    productoId?: SortOrder;
    unidadVenta?: SortOrder;
    cantidad?: SortOrder;
    estado?: SortOrder;
    producto?: ProductoOrderByWithRelationInput;
  };

  export type MovimientoInventarioWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[];
      OR?: MovimientoInventarioWhereInput[];
      NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[];
      tipo?: StringFilter<'MovimientoInventario'> | string;
      numero?: StringFilter<'MovimientoInventario'> | string;
      fecha?: DateTimeFilter<'MovimientoInventario'> | Date | string;
      signo?: StringFilter<'MovimientoInventario'> | string;
      productoId?: IntFilter<'MovimientoInventario'> | number;
      unidadVenta?: StringFilter<'MovimientoInventario'> | string;
      cantidad?: IntFilter<'MovimientoInventario'> | number;
      estado?: StringFilter<'MovimientoInventario'> | string;
      producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
    },
    'id'
  >;

  export type MovimientoInventarioOrderByWithAggregationInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    fecha?: SortOrder;
    signo?: SortOrder;
    productoId?: SortOrder;
    unidadVenta?: SortOrder;
    cantidad?: SortOrder;
    estado?: SortOrder;
    _count?: MovimientoInventarioCountOrderByAggregateInput;
    _avg?: MovimientoInventarioAvgOrderByAggregateInput;
    _max?: MovimientoInventarioMaxOrderByAggregateInput;
    _min?: MovimientoInventarioMinOrderByAggregateInput;
    _sum?: MovimientoInventarioSumOrderByAggregateInput;
  };

  export type MovimientoInventarioScalarWhereWithAggregatesInput = {
    AND?:
      | MovimientoInventarioScalarWhereWithAggregatesInput
      | MovimientoInventarioScalarWhereWithAggregatesInput[];
    OR?: MovimientoInventarioScalarWhereWithAggregatesInput[];
    NOT?:
      | MovimientoInventarioScalarWhereWithAggregatesInput
      | MovimientoInventarioScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'MovimientoInventario'> | number;
    tipo?: StringWithAggregatesFilter<'MovimientoInventario'> | string;
    numero?: StringWithAggregatesFilter<'MovimientoInventario'> | string;
    fecha?:
      | DateTimeWithAggregatesFilter<'MovimientoInventario'>
      | Date
      | string;
    signo?: StringWithAggregatesFilter<'MovimientoInventario'> | string;
    productoId?: IntWithAggregatesFilter<'MovimientoInventario'> | number;
    unidadVenta?: StringWithAggregatesFilter<'MovimientoInventario'> | string;
    cantidad?: IntWithAggregatesFilter<'MovimientoInventario'> | number;
    estado?: StringWithAggregatesFilter<'MovimientoInventario'> | string;
  };

  export type PedidoCabWhereInput = {
    AND?: PedidoCabWhereInput | PedidoCabWhereInput[];
    OR?: PedidoCabWhereInput[];
    NOT?: PedidoCabWhereInput | PedidoCabWhereInput[];
    id?: IntFilter<'PedidoCab'> | number;
    tipo?: StringFilter<'PedidoCab'> | string;
    numero?: StringFilter<'PedidoCab'> | string;
    clienteId?: IntFilter<'PedidoCab'> | number;
    fecha?: DateTimeFilter<'PedidoCab'> | Date | string;
    direccionEntrega?: StringFilter<'PedidoCab'> | string;
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>;
    detalles?: PedidoDetListRelationFilter;
  };

  export type PedidoCabOrderByWithRelationInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    clienteId?: SortOrder;
    fecha?: SortOrder;
    direccionEntrega?: SortOrder;
    cliente?: ClienteOrderByWithRelationInput;
    detalles?: PedidoDetOrderByRelationAggregateInput;
  };

  export type PedidoCabWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PedidoCabWhereInput | PedidoCabWhereInput[];
      OR?: PedidoCabWhereInput[];
      NOT?: PedidoCabWhereInput | PedidoCabWhereInput[];
      tipo?: StringFilter<'PedidoCab'> | string;
      numero?: StringFilter<'PedidoCab'> | string;
      clienteId?: IntFilter<'PedidoCab'> | number;
      fecha?: DateTimeFilter<'PedidoCab'> | Date | string;
      direccionEntrega?: StringFilter<'PedidoCab'> | string;
      cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>;
      detalles?: PedidoDetListRelationFilter;
    },
    'id'
  >;

  export type PedidoCabOrderByWithAggregationInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    clienteId?: SortOrder;
    fecha?: SortOrder;
    direccionEntrega?: SortOrder;
    _count?: PedidoCabCountOrderByAggregateInput;
    _avg?: PedidoCabAvgOrderByAggregateInput;
    _max?: PedidoCabMaxOrderByAggregateInput;
    _min?: PedidoCabMinOrderByAggregateInput;
    _sum?: PedidoCabSumOrderByAggregateInput;
  };

  export type PedidoCabScalarWhereWithAggregatesInput = {
    AND?:
      | PedidoCabScalarWhereWithAggregatesInput
      | PedidoCabScalarWhereWithAggregatesInput[];
    OR?: PedidoCabScalarWhereWithAggregatesInput[];
    NOT?:
      | PedidoCabScalarWhereWithAggregatesInput
      | PedidoCabScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'PedidoCab'> | number;
    tipo?: StringWithAggregatesFilter<'PedidoCab'> | string;
    numero?: StringWithAggregatesFilter<'PedidoCab'> | string;
    clienteId?: IntWithAggregatesFilter<'PedidoCab'> | number;
    fecha?: DateTimeWithAggregatesFilter<'PedidoCab'> | Date | string;
    direccionEntrega?: StringWithAggregatesFilter<'PedidoCab'> | string;
  };

  export type PedidoDetWhereInput = {
    AND?: PedidoDetWhereInput | PedidoDetWhereInput[];
    OR?: PedidoDetWhereInput[];
    NOT?: PedidoDetWhereInput | PedidoDetWhereInput[];
    id?: IntFilter<'PedidoDet'> | number;
    pedidoId?: IntFilter<'PedidoDet'> | number;
    productoId?: IntFilter<'PedidoDet'> | number;
    cantidad?: IntFilter<'PedidoDet'> | number;
    valorUnitario?: FloatFilter<'PedidoDet'> | number;
    tasaImpuesto?: FloatFilter<'PedidoDet'> | number;
    precioUnitario?: FloatFilter<'PedidoDet'> | number;
    precioTotal?: FloatFilter<'PedidoDet'> | number;
    pedido?: XOR<PedidoCabScalarRelationFilter, PedidoCabWhereInput>;
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
  };

  export type PedidoDetOrderByWithRelationInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
    pedido?: PedidoCabOrderByWithRelationInput;
    producto?: ProductoOrderByWithRelationInput;
  };

  export type PedidoDetWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PedidoDetWhereInput | PedidoDetWhereInput[];
      OR?: PedidoDetWhereInput[];
      NOT?: PedidoDetWhereInput | PedidoDetWhereInput[];
      pedidoId?: IntFilter<'PedidoDet'> | number;
      productoId?: IntFilter<'PedidoDet'> | number;
      cantidad?: IntFilter<'PedidoDet'> | number;
      valorUnitario?: FloatFilter<'PedidoDet'> | number;
      tasaImpuesto?: FloatFilter<'PedidoDet'> | number;
      precioUnitario?: FloatFilter<'PedidoDet'> | number;
      precioTotal?: FloatFilter<'PedidoDet'> | number;
      pedido?: XOR<PedidoCabScalarRelationFilter, PedidoCabWhereInput>;
      producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>;
    },
    'id'
  >;

  export type PedidoDetOrderByWithAggregationInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
    _count?: PedidoDetCountOrderByAggregateInput;
    _avg?: PedidoDetAvgOrderByAggregateInput;
    _max?: PedidoDetMaxOrderByAggregateInput;
    _min?: PedidoDetMinOrderByAggregateInput;
    _sum?: PedidoDetSumOrderByAggregateInput;
  };

  export type PedidoDetScalarWhereWithAggregatesInput = {
    AND?:
      | PedidoDetScalarWhereWithAggregatesInput
      | PedidoDetScalarWhereWithAggregatesInput[];
    OR?: PedidoDetScalarWhereWithAggregatesInput[];
    NOT?:
      | PedidoDetScalarWhereWithAggregatesInput
      | PedidoDetScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'PedidoDet'> | number;
    pedidoId?: IntWithAggregatesFilter<'PedidoDet'> | number;
    productoId?: IntWithAggregatesFilter<'PedidoDet'> | number;
    cantidad?: IntWithAggregatesFilter<'PedidoDet'> | number;
    valorUnitario?: FloatWithAggregatesFilter<'PedidoDet'> | number;
    tasaImpuesto?: FloatWithAggregatesFilter<'PedidoDet'> | number;
    precioUnitario?: FloatWithAggregatesFilter<'PedidoDet'> | number;
    precioTotal?: FloatWithAggregatesFilter<'PedidoDet'> | number;
  };

  export type EmpresaCreateInput = {
    ruc: string;
    razonSocial: string;
    direccion: string;
    codUbigeo: string;
    estado: string;
  };

  export type EmpresaUncheckedCreateInput = {
    id?: number;
    ruc: string;
    razonSocial: string;
    direccion: string;
    codUbigeo: string;
    estado: string;
  };

  export type EmpresaUpdateInput = {
    ruc?: StringFieldUpdateOperationsInput | string;
    razonSocial?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codUbigeo?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    ruc?: StringFieldUpdateOperationsInput | string;
    razonSocial?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codUbigeo?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type EmpresaCreateManyInput = {
    id?: number;
    ruc: string;
    razonSocial: string;
    direccion: string;
    codUbigeo: string;
    estado: string;
  };

  export type EmpresaUpdateManyMutationInput = {
    ruc?: StringFieldUpdateOperationsInput | string;
    razonSocial?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codUbigeo?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    ruc?: StringFieldUpdateOperationsInput | string;
    razonSocial?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codUbigeo?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type ClienteCreateInput = {
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
    pedidos?: PedidoCabCreateNestedManyWithoutClienteInput;
  };

  export type ClienteUncheckedCreateInput = {
    id?: number;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
    pedidos?: PedidoCabUncheckedCreateNestedManyWithoutClienteInput;
  };

  export type ClienteUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
    pedidos?: PedidoCabUpdateManyWithoutClienteNestedInput;
  };

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
    pedidos?: PedidoCabUncheckedUpdateManyWithoutClienteNestedInput;
  };

  export type ClienteCreateManyInput = {
    id?: number;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
  };

  export type ClienteUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoriaCreateInput = {
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput;
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput;
    productos?: ProductoCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaUncheckedCreateInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadreId?: number | null;
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput;
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput;
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput;
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null;
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput;
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaCreateManyInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadreId?: number | null;
  };

  export type CategoriaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ProductoCreateInput = {
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    categoria: CategoriaCreateNestedOneWithoutProductosInput;
    stocks?: StockCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUncheckedCreateInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetUncheckedCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    stocks?: StockUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    categoriaId?: IntFieldUpdateOperationsInput | number;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUncheckedUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoCreateManyInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
  };

  export type ProductoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    categoriaId?: IntFieldUpdateOperationsInput | number;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type StockCreateInput = {
    stockFisico: number;
    stockComprometido: number;
    producto: ProductoCreateNestedOneWithoutStocksInput;
  };

  export type StockUncheckedCreateInput = {
    id?: number;
    productoId: number;
    stockFisico: number;
    stockComprometido: number;
  };

  export type StockUpdateInput = {
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
    producto?: ProductoUpdateOneRequiredWithoutStocksNestedInput;
  };

  export type StockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type StockCreateManyInput = {
    id?: number;
    productoId: number;
    stockFisico: number;
    stockComprometido: number;
  };

  export type StockUpdateManyMutationInput = {
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type StockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type MovimientoInventarioCreateInput = {
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    unidadVenta: string;
    cantidad: number;
    estado: string;
    producto: ProductoCreateNestedOneWithoutMovimientosInput;
  };

  export type MovimientoInventarioUncheckedCreateInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    productoId: number;
    unidadVenta: string;
    cantidad: number;
    estado: string;
  };

  export type MovimientoInventarioUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    producto?: ProductoUpdateOneRequiredWithoutMovimientosNestedInput;
  };

  export type MovimientoInventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    productoId?: IntFieldUpdateOperationsInput | number;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type MovimientoInventarioCreateManyInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    productoId: number;
    unidadVenta: string;
    cantidad: number;
    estado: string;
  };

  export type MovimientoInventarioUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type MovimientoInventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    productoId?: IntFieldUpdateOperationsInput | number;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type PedidoCabCreateInput = {
    tipo: string;
    numero: string;
    fecha: Date | string;
    direccionEntrega: string;
    cliente: ClienteCreateNestedOneWithoutPedidosInput;
    detalles?: PedidoDetCreateNestedManyWithoutPedidoInput;
  };

  export type PedidoCabUncheckedCreateInput = {
    id?: number;
    tipo: string;
    numero: string;
    clienteId: number;
    fecha: Date | string;
    direccionEntrega: string;
    detalles?: PedidoDetUncheckedCreateNestedManyWithoutPedidoInput;
  };

  export type PedidoCabUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput;
    detalles?: PedidoDetUpdateManyWithoutPedidoNestedInput;
  };

  export type PedidoCabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    clienteId?: IntFieldUpdateOperationsInput | number;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
    detalles?: PedidoDetUncheckedUpdateManyWithoutPedidoNestedInput;
  };

  export type PedidoCabCreateManyInput = {
    id?: number;
    tipo: string;
    numero: string;
    clienteId: number;
    fecha: Date | string;
    direccionEntrega: string;
  };

  export type PedidoCabUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
  };

  export type PedidoCabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    clienteId?: IntFieldUpdateOperationsInput | number;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
  };

  export type PedidoDetCreateInput = {
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
    pedido: PedidoCabCreateNestedOneWithoutDetallesInput;
    producto: ProductoCreateNestedOneWithoutPedidosDetalleInput;
  };

  export type PedidoDetUncheckedCreateInput = {
    id?: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type PedidoDetUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
    pedido?: PedidoCabUpdateOneRequiredWithoutDetallesNestedInput;
    producto?: ProductoUpdateOneRequiredWithoutPedidosDetalleNestedInput;
  };

  export type PedidoDetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    pedidoId?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type PedidoDetCreateManyInput = {
    id?: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type PedidoDetUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type PedidoDetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    pedidoId?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder;
    ruc?: SortOrder;
    razonSocial?: SortOrder;
    direccion?: SortOrder;
    codUbigeo?: SortOrder;
    estado?: SortOrder;
  };

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder;
    ruc?: SortOrder;
    razonSocial?: SortOrder;
    direccion?: SortOrder;
    codUbigeo?: SortOrder;
    estado?: SortOrder;
  };

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder;
    ruc?: SortOrder;
    razonSocial?: SortOrder;
    direccion?: SortOrder;
    codUbigeo?: SortOrder;
    estado?: SortOrder;
  };

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type PedidoCabListRelationFilter = {
    every?: PedidoCabWhereInput;
    some?: PedidoCabWhereInput;
    none?: PedidoCabWhereInput;
  };

  export type PedidoCabOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder;
    nombres?: SortOrder;
    apePaterno?: SortOrder;
    apeMaterno?: SortOrder;
    celular?: SortOrder;
    email?: SortOrder;
    direccion?: SortOrder;
    codPostal?: SortOrder;
    estado?: SortOrder;
  };

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder;
    nombres?: SortOrder;
    apePaterno?: SortOrder;
    apeMaterno?: SortOrder;
    celular?: SortOrder;
    email?: SortOrder;
    direccion?: SortOrder;
    codPostal?: SortOrder;
    estado?: SortOrder;
  };

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder;
    nombres?: SortOrder;
    apePaterno?: SortOrder;
    apeMaterno?: SortOrder;
    celular?: SortOrder;
    email?: SortOrder;
    direccion?: SortOrder;
    codPostal?: SortOrder;
    estado?: SortOrder;
  };

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null;
    isNot?: CategoriaWhereInput | null;
  };

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput;
    some?: CategoriaWhereInput;
    none?: CategoriaWhereInput;
  };

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput;
    some?: ProductoWhereInput;
    none?: ProductoWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    tipo?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    estado?: SortOrder;
    categoriaPadreId?: SortOrder;
  };

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder;
    categoriaPadreId?: SortOrder;
  };

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    tipo?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    estado?: SortOrder;
    categoriaPadreId?: SortOrder;
  };

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    tipo?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    estado?: SortOrder;
    categoriaPadreId?: SortOrder;
  };

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder;
    categoriaPadreId?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput;
    isNot?: CategoriaWhereInput;
  };

  export type StockListRelationFilter = {
    every?: StockWhereInput;
    some?: StockWhereInput;
    none?: StockWhereInput;
  };

  export type MovimientoInventarioListRelationFilter = {
    every?: MovimientoInventarioWhereInput;
    some?: MovimientoInventarioWhereInput;
    none?: MovimientoInventarioWhereInput;
  };

  export type PedidoDetListRelationFilter = {
    every?: PedidoDetWhereInput;
    some?: PedidoDetWhereInput;
    none?: PedidoDetWhereInput;
  };

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MovimientoInventarioOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PedidoDetOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    descripcion?: SortOrder;
    unidadVenta?: SortOrder;
    categoriaId?: SortOrder;
    contenidoUnidad?: SortOrder;
    infoAdicional?: SortOrder;
    fotoUrl?: SortOrder;
    moneda?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
    estado?: SortOrder;
  };

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder;
    categoriaId?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
  };

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    descripcion?: SortOrder;
    unidadVenta?: SortOrder;
    categoriaId?: SortOrder;
    contenidoUnidad?: SortOrder;
    infoAdicional?: SortOrder;
    fotoUrl?: SortOrder;
    moneda?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
    estado?: SortOrder;
  };

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder;
    codigo?: SortOrder;
    descripcion?: SortOrder;
    unidadVenta?: SortOrder;
    categoriaId?: SortOrder;
    contenidoUnidad?: SortOrder;
    infoAdicional?: SortOrder;
    fotoUrl?: SortOrder;
    moneda?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
    estado?: SortOrder;
  };

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder;
    categoriaId?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioVenta?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput;
    isNot?: ProductoWhereInput;
  };

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
  };

  export type StockAvgOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
  };

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
  };

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
  };

  export type StockSumOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    stockFisico?: SortOrder;
    stockComprometido?: SortOrder;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type MovimientoInventarioCountOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    fecha?: SortOrder;
    signo?: SortOrder;
    productoId?: SortOrder;
    unidadVenta?: SortOrder;
    cantidad?: SortOrder;
    estado?: SortOrder;
  };

  export type MovimientoInventarioAvgOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
  };

  export type MovimientoInventarioMaxOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    fecha?: SortOrder;
    signo?: SortOrder;
    productoId?: SortOrder;
    unidadVenta?: SortOrder;
    cantidad?: SortOrder;
    estado?: SortOrder;
  };

  export type MovimientoInventarioMinOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    fecha?: SortOrder;
    signo?: SortOrder;
    productoId?: SortOrder;
    unidadVenta?: SortOrder;
    cantidad?: SortOrder;
    estado?: SortOrder;
  };

  export type MovimientoInventarioSumOrderByAggregateInput = {
    id?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput;
    isNot?: ClienteWhereInput;
  };

  export type PedidoCabCountOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    clienteId?: SortOrder;
    fecha?: SortOrder;
    direccionEntrega?: SortOrder;
  };

  export type PedidoCabAvgOrderByAggregateInput = {
    id?: SortOrder;
    clienteId?: SortOrder;
  };

  export type PedidoCabMaxOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    clienteId?: SortOrder;
    fecha?: SortOrder;
    direccionEntrega?: SortOrder;
  };

  export type PedidoCabMinOrderByAggregateInput = {
    id?: SortOrder;
    tipo?: SortOrder;
    numero?: SortOrder;
    clienteId?: SortOrder;
    fecha?: SortOrder;
    direccionEntrega?: SortOrder;
  };

  export type PedidoCabSumOrderByAggregateInput = {
    id?: SortOrder;
    clienteId?: SortOrder;
  };

  export type PedidoCabScalarRelationFilter = {
    is?: PedidoCabWhereInput;
    isNot?: PedidoCabWhereInput;
  };

  export type PedidoDetCountOrderByAggregateInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
  };

  export type PedidoDetAvgOrderByAggregateInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
  };

  export type PedidoDetMaxOrderByAggregateInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
  };

  export type PedidoDetMinOrderByAggregateInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
  };

  export type PedidoDetSumOrderByAggregateInput = {
    id?: SortOrder;
    pedidoId?: SortOrder;
    productoId?: SortOrder;
    cantidad?: SortOrder;
    valorUnitario?: SortOrder;
    tasaImpuesto?: SortOrder;
    precioUnitario?: SortOrder;
    precioTotal?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PedidoCabCreateNestedManyWithoutClienteInput = {
    create?:
      | XOR<
          PedidoCabCreateWithoutClienteInput,
          PedidoCabUncheckedCreateWithoutClienteInput
        >
      | PedidoCabCreateWithoutClienteInput[]
      | PedidoCabUncheckedCreateWithoutClienteInput[];
    connectOrCreate?:
      | PedidoCabCreateOrConnectWithoutClienteInput
      | PedidoCabCreateOrConnectWithoutClienteInput[];
    createMany?: PedidoCabCreateManyClienteInputEnvelope;
    connect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
  };

  export type PedidoCabUncheckedCreateNestedManyWithoutClienteInput = {
    create?:
      | XOR<
          PedidoCabCreateWithoutClienteInput,
          PedidoCabUncheckedCreateWithoutClienteInput
        >
      | PedidoCabCreateWithoutClienteInput[]
      | PedidoCabUncheckedCreateWithoutClienteInput[];
    connectOrCreate?:
      | PedidoCabCreateOrConnectWithoutClienteInput
      | PedidoCabCreateOrConnectWithoutClienteInput[];
    createMany?: PedidoCabCreateManyClienteInputEnvelope;
    connect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
  };

  export type PedidoCabUpdateManyWithoutClienteNestedInput = {
    create?:
      | XOR<
          PedidoCabCreateWithoutClienteInput,
          PedidoCabUncheckedCreateWithoutClienteInput
        >
      | PedidoCabCreateWithoutClienteInput[]
      | PedidoCabUncheckedCreateWithoutClienteInput[];
    connectOrCreate?:
      | PedidoCabCreateOrConnectWithoutClienteInput
      | PedidoCabCreateOrConnectWithoutClienteInput[];
    upsert?:
      | PedidoCabUpsertWithWhereUniqueWithoutClienteInput
      | PedidoCabUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: PedidoCabCreateManyClienteInputEnvelope;
    set?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    disconnect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    delete?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    connect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    update?:
      | PedidoCabUpdateWithWhereUniqueWithoutClienteInput
      | PedidoCabUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?:
      | PedidoCabUpdateManyWithWhereWithoutClienteInput
      | PedidoCabUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: PedidoCabScalarWhereInput | PedidoCabScalarWhereInput[];
  };

  export type PedidoCabUncheckedUpdateManyWithoutClienteNestedInput = {
    create?:
      | XOR<
          PedidoCabCreateWithoutClienteInput,
          PedidoCabUncheckedCreateWithoutClienteInput
        >
      | PedidoCabCreateWithoutClienteInput[]
      | PedidoCabUncheckedCreateWithoutClienteInput[];
    connectOrCreate?:
      | PedidoCabCreateOrConnectWithoutClienteInput
      | PedidoCabCreateOrConnectWithoutClienteInput[];
    upsert?:
      | PedidoCabUpsertWithWhereUniqueWithoutClienteInput
      | PedidoCabUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: PedidoCabCreateManyClienteInputEnvelope;
    set?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    disconnect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    delete?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    connect?: PedidoCabWhereUniqueInput | PedidoCabWhereUniqueInput[];
    update?:
      | PedidoCabUpdateWithWhereUniqueWithoutClienteInput
      | PedidoCabUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?:
      | PedidoCabUpdateManyWithWhereWithoutClienteInput
      | PedidoCabUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: PedidoCabScalarWhereInput | PedidoCabScalarWhereInput[];
  };

  export type CategoriaCreateNestedOneWithoutSubcategoriasInput = {
    create?: XOR<
      CategoriaCreateWithoutSubcategoriasInput,
      CategoriaUncheckedCreateWithoutSubcategoriasInput
    >;
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput;
    connect?: CategoriaWhereUniqueInput;
  };

  export type CategoriaCreateNestedManyWithoutCategoriaPadreInput = {
    create?:
      | XOR<
          CategoriaCreateWithoutCategoriaPadreInput,
          CategoriaUncheckedCreateWithoutCategoriaPadreInput
        >
      | CategoriaCreateWithoutCategoriaPadreInput[]
      | CategoriaUncheckedCreateWithoutCategoriaPadreInput[];
    connectOrCreate?:
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput[];
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope;
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
  };

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?:
      | XOR<
          ProductoCreateWithoutCategoriaInput,
          ProductoUncheckedCreateWithoutCategoriaInput
        >
      | ProductoCreateWithoutCategoriaInput[]
      | ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?:
      | ProductoCreateOrConnectWithoutCategoriaInput
      | ProductoCreateOrConnectWithoutCategoriaInput[];
    createMany?: ProductoCreateManyCategoriaInputEnvelope;
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
  };

  export type CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput = {
    create?:
      | XOR<
          CategoriaCreateWithoutCategoriaPadreInput,
          CategoriaUncheckedCreateWithoutCategoriaPadreInput
        >
      | CategoriaCreateWithoutCategoriaPadreInput[]
      | CategoriaUncheckedCreateWithoutCategoriaPadreInput[];
    connectOrCreate?:
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput[];
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope;
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
  };

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?:
      | XOR<
          ProductoCreateWithoutCategoriaInput,
          ProductoUncheckedCreateWithoutCategoriaInput
        >
      | ProductoCreateWithoutCategoriaInput[]
      | ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?:
      | ProductoCreateOrConnectWithoutCategoriaInput
      | ProductoCreateOrConnectWithoutCategoriaInput[];
    createMany?: ProductoCreateManyCategoriaInputEnvelope;
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type CategoriaUpdateOneWithoutSubcategoriasNestedInput = {
    create?: XOR<
      CategoriaCreateWithoutSubcategoriasInput,
      CategoriaUncheckedCreateWithoutSubcategoriasInput
    >;
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput;
    upsert?: CategoriaUpsertWithoutSubcategoriasInput;
    disconnect?: CategoriaWhereInput | boolean;
    delete?: CategoriaWhereInput | boolean;
    connect?: CategoriaWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput,
        CategoriaUpdateWithoutSubcategoriasInput
      >,
      CategoriaUncheckedUpdateWithoutSubcategoriasInput
    >;
  };

  export type CategoriaUpdateManyWithoutCategoriaPadreNestedInput = {
    create?:
      | XOR<
          CategoriaCreateWithoutCategoriaPadreInput,
          CategoriaUncheckedCreateWithoutCategoriaPadreInput
        >
      | CategoriaCreateWithoutCategoriaPadreInput[]
      | CategoriaUncheckedCreateWithoutCategoriaPadreInput[];
    connectOrCreate?:
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput[];
    upsert?:
      | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput
      | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput[];
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope;
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    update?:
      | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput
      | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput[];
    updateMany?:
      | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput
      | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput[];
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[];
  };

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?:
      | XOR<
          ProductoCreateWithoutCategoriaInput,
          ProductoUncheckedCreateWithoutCategoriaInput
        >
      | ProductoCreateWithoutCategoriaInput[]
      | ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?:
      | ProductoCreateOrConnectWithoutCategoriaInput
      | ProductoCreateOrConnectWithoutCategoriaInput[];
    upsert?:
      | ProductoUpsertWithWhereUniqueWithoutCategoriaInput
      | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: ProductoCreateManyCategoriaInputEnvelope;
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    update?:
      | ProductoUpdateWithWhereUniqueWithoutCategoriaInput
      | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?:
      | ProductoUpdateManyWithWhereWithoutCategoriaInput
      | ProductoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput = {
    create?:
      | XOR<
          CategoriaCreateWithoutCategoriaPadreInput,
          CategoriaUncheckedCreateWithoutCategoriaPadreInput
        >
      | CategoriaCreateWithoutCategoriaPadreInput[]
      | CategoriaUncheckedCreateWithoutCategoriaPadreInput[];
    connectOrCreate?:
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput
      | CategoriaCreateOrConnectWithoutCategoriaPadreInput[];
    upsert?:
      | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput
      | CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput[];
    createMany?: CategoriaCreateManyCategoriaPadreInputEnvelope;
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[];
    update?:
      | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput
      | CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput[];
    updateMany?:
      | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput
      | CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput[];
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[];
  };

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?:
      | XOR<
          ProductoCreateWithoutCategoriaInput,
          ProductoUncheckedCreateWithoutCategoriaInput
        >
      | ProductoCreateWithoutCategoriaInput[]
      | ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?:
      | ProductoCreateOrConnectWithoutCategoriaInput
      | ProductoCreateOrConnectWithoutCategoriaInput[];
    upsert?:
      | ProductoUpsertWithWhereUniqueWithoutCategoriaInput
      | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: ProductoCreateManyCategoriaInputEnvelope;
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[];
    update?:
      | ProductoUpdateWithWhereUniqueWithoutCategoriaInput
      | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?:
      | ProductoUpdateManyWithWhereWithoutCategoriaInput
      | ProductoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[];
  };

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<
      CategoriaCreateWithoutProductosInput,
      CategoriaUncheckedCreateWithoutProductosInput
    >;
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput;
    connect?: CategoriaWhereUniqueInput;
  };

  export type StockCreateNestedManyWithoutProductoInput = {
    create?:
      | XOR<
          StockCreateWithoutProductoInput,
          StockUncheckedCreateWithoutProductoInput
        >
      | StockCreateWithoutProductoInput[]
      | StockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | StockCreateOrConnectWithoutProductoInput
      | StockCreateOrConnectWithoutProductoInput[];
    createMany?: StockCreateManyProductoInputEnvelope;
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[];
  };

  export type MovimientoInventarioCreateNestedManyWithoutProductoInput = {
    create?:
      | XOR<
          MovimientoInventarioCreateWithoutProductoInput,
          MovimientoInventarioUncheckedCreateWithoutProductoInput
        >
      | MovimientoInventarioCreateWithoutProductoInput[]
      | MovimientoInventarioUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | MovimientoInventarioCreateOrConnectWithoutProductoInput
      | MovimientoInventarioCreateOrConnectWithoutProductoInput[];
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope;
    connect?:
      | MovimientoInventarioWhereUniqueInput
      | MovimientoInventarioWhereUniqueInput[];
  };

  export type PedidoDetCreateNestedManyWithoutProductoInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutProductoInput,
          PedidoDetUncheckedCreateWithoutProductoInput
        >
      | PedidoDetCreateWithoutProductoInput[]
      | PedidoDetUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutProductoInput
      | PedidoDetCreateOrConnectWithoutProductoInput[];
    createMany?: PedidoDetCreateManyProductoInputEnvelope;
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
  };

  export type StockUncheckedCreateNestedManyWithoutProductoInput = {
    create?:
      | XOR<
          StockCreateWithoutProductoInput,
          StockUncheckedCreateWithoutProductoInput
        >
      | StockCreateWithoutProductoInput[]
      | StockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | StockCreateOrConnectWithoutProductoInput
      | StockCreateOrConnectWithoutProductoInput[];
    createMany?: StockCreateManyProductoInputEnvelope;
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[];
  };

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput =
    {
      create?:
        | XOR<
            MovimientoInventarioCreateWithoutProductoInput,
            MovimientoInventarioUncheckedCreateWithoutProductoInput
          >
        | MovimientoInventarioCreateWithoutProductoInput[]
        | MovimientoInventarioUncheckedCreateWithoutProductoInput[];
      connectOrCreate?:
        | MovimientoInventarioCreateOrConnectWithoutProductoInput
        | MovimientoInventarioCreateOrConnectWithoutProductoInput[];
      createMany?: MovimientoInventarioCreateManyProductoInputEnvelope;
      connect?:
        | MovimientoInventarioWhereUniqueInput
        | MovimientoInventarioWhereUniqueInput[];
    };

  export type PedidoDetUncheckedCreateNestedManyWithoutProductoInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutProductoInput,
          PedidoDetUncheckedCreateWithoutProductoInput
        >
      | PedidoDetCreateWithoutProductoInput[]
      | PedidoDetUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutProductoInput
      | PedidoDetCreateOrConnectWithoutProductoInput[];
    createMany?: PedidoDetCreateManyProductoInputEnvelope;
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<
      CategoriaCreateWithoutProductosInput,
      CategoriaUncheckedCreateWithoutProductosInput
    >;
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput;
    upsert?: CategoriaUpsertWithoutProductosInput;
    connect?: CategoriaWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoriaUpdateToOneWithWhereWithoutProductosInput,
        CategoriaUpdateWithoutProductosInput
      >,
      CategoriaUncheckedUpdateWithoutProductosInput
    >;
  };

  export type StockUpdateManyWithoutProductoNestedInput = {
    create?:
      | XOR<
          StockCreateWithoutProductoInput,
          StockUncheckedCreateWithoutProductoInput
        >
      | StockCreateWithoutProductoInput[]
      | StockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | StockCreateOrConnectWithoutProductoInput
      | StockCreateOrConnectWithoutProductoInput[];
    upsert?:
      | StockUpsertWithWhereUniqueWithoutProductoInput
      | StockUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: StockCreateManyProductoInputEnvelope;
    set?: StockWhereUniqueInput | StockWhereUniqueInput[];
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[];
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[];
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[];
    update?:
      | StockUpdateWithWhereUniqueWithoutProductoInput
      | StockUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?:
      | StockUpdateManyWithWhereWithoutProductoInput
      | StockUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[];
  };

  export type MovimientoInventarioUpdateManyWithoutProductoNestedInput = {
    create?:
      | XOR<
          MovimientoInventarioCreateWithoutProductoInput,
          MovimientoInventarioUncheckedCreateWithoutProductoInput
        >
      | MovimientoInventarioCreateWithoutProductoInput[]
      | MovimientoInventarioUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | MovimientoInventarioCreateOrConnectWithoutProductoInput
      | MovimientoInventarioCreateOrConnectWithoutProductoInput[];
    upsert?:
      | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput
      | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope;
    set?:
      | MovimientoInventarioWhereUniqueInput
      | MovimientoInventarioWhereUniqueInput[];
    disconnect?:
      | MovimientoInventarioWhereUniqueInput
      | MovimientoInventarioWhereUniqueInput[];
    delete?:
      | MovimientoInventarioWhereUniqueInput
      | MovimientoInventarioWhereUniqueInput[];
    connect?:
      | MovimientoInventarioWhereUniqueInput
      | MovimientoInventarioWhereUniqueInput[];
    update?:
      | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput
      | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?:
      | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput
      | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?:
      | MovimientoInventarioScalarWhereInput
      | MovimientoInventarioScalarWhereInput[];
  };

  export type PedidoDetUpdateManyWithoutProductoNestedInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutProductoInput,
          PedidoDetUncheckedCreateWithoutProductoInput
        >
      | PedidoDetCreateWithoutProductoInput[]
      | PedidoDetUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutProductoInput
      | PedidoDetCreateOrConnectWithoutProductoInput[];
    upsert?:
      | PedidoDetUpsertWithWhereUniqueWithoutProductoInput
      | PedidoDetUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: PedidoDetCreateManyProductoInputEnvelope;
    set?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    disconnect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    delete?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    update?:
      | PedidoDetUpdateWithWhereUniqueWithoutProductoInput
      | PedidoDetUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?:
      | PedidoDetUpdateManyWithWhereWithoutProductoInput
      | PedidoDetUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
  };

  export type StockUncheckedUpdateManyWithoutProductoNestedInput = {
    create?:
      | XOR<
          StockCreateWithoutProductoInput,
          StockUncheckedCreateWithoutProductoInput
        >
      | StockCreateWithoutProductoInput[]
      | StockUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | StockCreateOrConnectWithoutProductoInput
      | StockCreateOrConnectWithoutProductoInput[];
    upsert?:
      | StockUpsertWithWhereUniqueWithoutProductoInput
      | StockUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: StockCreateManyProductoInputEnvelope;
    set?: StockWhereUniqueInput | StockWhereUniqueInput[];
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[];
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[];
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[];
    update?:
      | StockUpdateWithWhereUniqueWithoutProductoInput
      | StockUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?:
      | StockUpdateManyWithWhereWithoutProductoInput
      | StockUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[];
  };

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput =
    {
      create?:
        | XOR<
            MovimientoInventarioCreateWithoutProductoInput,
            MovimientoInventarioUncheckedCreateWithoutProductoInput
          >
        | MovimientoInventarioCreateWithoutProductoInput[]
        | MovimientoInventarioUncheckedCreateWithoutProductoInput[];
      connectOrCreate?:
        | MovimientoInventarioCreateOrConnectWithoutProductoInput
        | MovimientoInventarioCreateOrConnectWithoutProductoInput[];
      upsert?:
        | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput
        | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[];
      createMany?: MovimientoInventarioCreateManyProductoInputEnvelope;
      set?:
        | MovimientoInventarioWhereUniqueInput
        | MovimientoInventarioWhereUniqueInput[];
      disconnect?:
        | MovimientoInventarioWhereUniqueInput
        | MovimientoInventarioWhereUniqueInput[];
      delete?:
        | MovimientoInventarioWhereUniqueInput
        | MovimientoInventarioWhereUniqueInput[];
      connect?:
        | MovimientoInventarioWhereUniqueInput
        | MovimientoInventarioWhereUniqueInput[];
      update?:
        | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput
        | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[];
      updateMany?:
        | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput
        | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[];
      deleteMany?:
        | MovimientoInventarioScalarWhereInput
        | MovimientoInventarioScalarWhereInput[];
    };

  export type PedidoDetUncheckedUpdateManyWithoutProductoNestedInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutProductoInput,
          PedidoDetUncheckedCreateWithoutProductoInput
        >
      | PedidoDetCreateWithoutProductoInput[]
      | PedidoDetUncheckedCreateWithoutProductoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutProductoInput
      | PedidoDetCreateOrConnectWithoutProductoInput[];
    upsert?:
      | PedidoDetUpsertWithWhereUniqueWithoutProductoInput
      | PedidoDetUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: PedidoDetCreateManyProductoInputEnvelope;
    set?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    disconnect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    delete?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    update?:
      | PedidoDetUpdateWithWhereUniqueWithoutProductoInput
      | PedidoDetUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?:
      | PedidoDetUpdateManyWithWhereWithoutProductoInput
      | PedidoDetUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
  };

  export type ProductoCreateNestedOneWithoutStocksInput = {
    create?: XOR<
      ProductoCreateWithoutStocksInput,
      ProductoUncheckedCreateWithoutStocksInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutStocksInput;
    connect?: ProductoWhereUniqueInput;
  };

  export type ProductoUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<
      ProductoCreateWithoutStocksInput,
      ProductoUncheckedCreateWithoutStocksInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutStocksInput;
    upsert?: ProductoUpsertWithoutStocksInput;
    connect?: ProductoWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductoUpdateToOneWithWhereWithoutStocksInput,
        ProductoUpdateWithoutStocksInput
      >,
      ProductoUncheckedUpdateWithoutStocksInput
    >;
  };

  export type ProductoCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<
      ProductoCreateWithoutMovimientosInput,
      ProductoUncheckedCreateWithoutMovimientosInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput;
    connect?: ProductoWhereUniqueInput;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProductoUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<
      ProductoCreateWithoutMovimientosInput,
      ProductoUncheckedCreateWithoutMovimientosInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput;
    upsert?: ProductoUpsertWithoutMovimientosInput;
    connect?: ProductoWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductoUpdateToOneWithWhereWithoutMovimientosInput,
        ProductoUpdateWithoutMovimientosInput
      >,
      ProductoUncheckedUpdateWithoutMovimientosInput
    >;
  };

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<
      ClienteCreateWithoutPedidosInput,
      ClienteUncheckedCreateWithoutPedidosInput
    >;
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput;
    connect?: ClienteWhereUniqueInput;
  };

  export type PedidoDetCreateNestedManyWithoutPedidoInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutPedidoInput,
          PedidoDetUncheckedCreateWithoutPedidoInput
        >
      | PedidoDetCreateWithoutPedidoInput[]
      | PedidoDetUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutPedidoInput
      | PedidoDetCreateOrConnectWithoutPedidoInput[];
    createMany?: PedidoDetCreateManyPedidoInputEnvelope;
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
  };

  export type PedidoDetUncheckedCreateNestedManyWithoutPedidoInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutPedidoInput,
          PedidoDetUncheckedCreateWithoutPedidoInput
        >
      | PedidoDetCreateWithoutPedidoInput[]
      | PedidoDetUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutPedidoInput
      | PedidoDetCreateOrConnectWithoutPedidoInput[];
    createMany?: PedidoDetCreateManyPedidoInputEnvelope;
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
  };

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<
      ClienteCreateWithoutPedidosInput,
      ClienteUncheckedCreateWithoutPedidosInput
    >;
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput;
    upsert?: ClienteUpsertWithoutPedidosInput;
    connect?: ClienteWhereUniqueInput;
    update?: XOR<
      XOR<
        ClienteUpdateToOneWithWhereWithoutPedidosInput,
        ClienteUpdateWithoutPedidosInput
      >,
      ClienteUncheckedUpdateWithoutPedidosInput
    >;
  };

  export type PedidoDetUpdateManyWithoutPedidoNestedInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutPedidoInput,
          PedidoDetUncheckedCreateWithoutPedidoInput
        >
      | PedidoDetCreateWithoutPedidoInput[]
      | PedidoDetUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutPedidoInput
      | PedidoDetCreateOrConnectWithoutPedidoInput[];
    upsert?:
      | PedidoDetUpsertWithWhereUniqueWithoutPedidoInput
      | PedidoDetUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: PedidoDetCreateManyPedidoInputEnvelope;
    set?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    disconnect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    delete?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    update?:
      | PedidoDetUpdateWithWhereUniqueWithoutPedidoInput
      | PedidoDetUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?:
      | PedidoDetUpdateManyWithWhereWithoutPedidoInput
      | PedidoDetUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
  };

  export type PedidoDetUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?:
      | XOR<
          PedidoDetCreateWithoutPedidoInput,
          PedidoDetUncheckedCreateWithoutPedidoInput
        >
      | PedidoDetCreateWithoutPedidoInput[]
      | PedidoDetUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?:
      | PedidoDetCreateOrConnectWithoutPedidoInput
      | PedidoDetCreateOrConnectWithoutPedidoInput[];
    upsert?:
      | PedidoDetUpsertWithWhereUniqueWithoutPedidoInput
      | PedidoDetUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: PedidoDetCreateManyPedidoInputEnvelope;
    set?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    disconnect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    delete?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    connect?: PedidoDetWhereUniqueInput | PedidoDetWhereUniqueInput[];
    update?:
      | PedidoDetUpdateWithWhereUniqueWithoutPedidoInput
      | PedidoDetUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?:
      | PedidoDetUpdateManyWithWhereWithoutPedidoInput
      | PedidoDetUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
  };

  export type PedidoCabCreateNestedOneWithoutDetallesInput = {
    create?: XOR<
      PedidoCabCreateWithoutDetallesInput,
      PedidoCabUncheckedCreateWithoutDetallesInput
    >;
    connectOrCreate?: PedidoCabCreateOrConnectWithoutDetallesInput;
    connect?: PedidoCabWhereUniqueInput;
  };

  export type ProductoCreateNestedOneWithoutPedidosDetalleInput = {
    create?: XOR<
      ProductoCreateWithoutPedidosDetalleInput,
      ProductoUncheckedCreateWithoutPedidosDetalleInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosDetalleInput;
    connect?: ProductoWhereUniqueInput;
  };

  export type PedidoCabUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<
      PedidoCabCreateWithoutDetallesInput,
      PedidoCabUncheckedCreateWithoutDetallesInput
    >;
    connectOrCreate?: PedidoCabCreateOrConnectWithoutDetallesInput;
    upsert?: PedidoCabUpsertWithoutDetallesInput;
    connect?: PedidoCabWhereUniqueInput;
    update?: XOR<
      XOR<
        PedidoCabUpdateToOneWithWhereWithoutDetallesInput,
        PedidoCabUpdateWithoutDetallesInput
      >,
      PedidoCabUncheckedUpdateWithoutDetallesInput
    >;
  };

  export type ProductoUpdateOneRequiredWithoutPedidosDetalleNestedInput = {
    create?: XOR<
      ProductoCreateWithoutPedidosDetalleInput,
      ProductoUncheckedCreateWithoutPedidosDetalleInput
    >;
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosDetalleInput;
    upsert?: ProductoUpsertWithoutPedidosDetalleInput;
    connect?: ProductoWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductoUpdateToOneWithWhereWithoutPedidosDetalleInput,
        ProductoUpdateWithoutPedidosDetalleInput
      >,
      ProductoUncheckedUpdateWithoutPedidosDetalleInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type PedidoCabCreateWithoutClienteInput = {
    tipo: string;
    numero: string;
    fecha: Date | string;
    direccionEntrega: string;
    detalles?: PedidoDetCreateNestedManyWithoutPedidoInput;
  };

  export type PedidoCabUncheckedCreateWithoutClienteInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    direccionEntrega: string;
    detalles?: PedidoDetUncheckedCreateNestedManyWithoutPedidoInput;
  };

  export type PedidoCabCreateOrConnectWithoutClienteInput = {
    where: PedidoCabWhereUniqueInput;
    create: XOR<
      PedidoCabCreateWithoutClienteInput,
      PedidoCabUncheckedCreateWithoutClienteInput
    >;
  };

  export type PedidoCabCreateManyClienteInputEnvelope = {
    data: PedidoCabCreateManyClienteInput | PedidoCabCreateManyClienteInput[];
    skipDuplicates?: boolean;
  };

  export type PedidoCabUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoCabWhereUniqueInput;
    update: XOR<
      PedidoCabUpdateWithoutClienteInput,
      PedidoCabUncheckedUpdateWithoutClienteInput
    >;
    create: XOR<
      PedidoCabCreateWithoutClienteInput,
      PedidoCabUncheckedCreateWithoutClienteInput
    >;
  };

  export type PedidoCabUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoCabWhereUniqueInput;
    data: XOR<
      PedidoCabUpdateWithoutClienteInput,
      PedidoCabUncheckedUpdateWithoutClienteInput
    >;
  };

  export type PedidoCabUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoCabScalarWhereInput;
    data: XOR<
      PedidoCabUpdateManyMutationInput,
      PedidoCabUncheckedUpdateManyWithoutClienteInput
    >;
  };

  export type PedidoCabScalarWhereInput = {
    AND?: PedidoCabScalarWhereInput | PedidoCabScalarWhereInput[];
    OR?: PedidoCabScalarWhereInput[];
    NOT?: PedidoCabScalarWhereInput | PedidoCabScalarWhereInput[];
    id?: IntFilter<'PedidoCab'> | number;
    tipo?: StringFilter<'PedidoCab'> | string;
    numero?: StringFilter<'PedidoCab'> | string;
    clienteId?: IntFilter<'PedidoCab'> | number;
    fecha?: DateTimeFilter<'PedidoCab'> | Date | string;
    direccionEntrega?: StringFilter<'PedidoCab'> | string;
  };

  export type CategoriaCreateWithoutSubcategoriasInput = {
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput;
    productos?: ProductoCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaUncheckedCreateWithoutSubcategoriasInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadreId?: number | null;
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaCreateOrConnectWithoutSubcategoriasInput = {
    where: CategoriaWhereUniqueInput;
    create: XOR<
      CategoriaCreateWithoutSubcategoriasInput,
      CategoriaUncheckedCreateWithoutSubcategoriasInput
    >;
  };

  export type CategoriaCreateWithoutCategoriaPadreInput = {
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput;
    productos?: ProductoCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaUncheckedCreateWithoutCategoriaPadreInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput;
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput;
  };

  export type CategoriaCreateOrConnectWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput;
    create: XOR<
      CategoriaCreateWithoutCategoriaPadreInput,
      CategoriaUncheckedCreateWithoutCategoriaPadreInput
    >;
  };

  export type CategoriaCreateManyCategoriaPadreInputEnvelope = {
    data:
      | CategoriaCreateManyCategoriaPadreInput
      | CategoriaCreateManyCategoriaPadreInput[];
    skipDuplicates?: boolean;
  };

  export type ProductoCreateWithoutCategoriaInput = {
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    stocks?: StockCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetUncheckedCreateNestedManyWithoutProductoInput;
  };

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput;
    create: XOR<
      ProductoCreateWithoutCategoriaInput,
      ProductoUncheckedCreateWithoutCategoriaInput
    >;
  };

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
  };

  export type CategoriaUpsertWithoutSubcategoriasInput = {
    update: XOR<
      CategoriaUpdateWithoutSubcategoriasInput,
      CategoriaUncheckedUpdateWithoutSubcategoriasInput
    >;
    create: XOR<
      CategoriaCreateWithoutSubcategoriasInput,
      CategoriaUncheckedCreateWithoutSubcategoriasInput
    >;
    where?: CategoriaWhereInput;
  };

  export type CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput = {
    where?: CategoriaWhereInput;
    data: XOR<
      CategoriaUpdateWithoutSubcategoriasInput,
      CategoriaUncheckedUpdateWithoutSubcategoriasInput
    >;
  };

  export type CategoriaUpdateWithoutSubcategoriasInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput;
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaUncheckedUpdateWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null;
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaUpsertWithWhereUniqueWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput;
    update: XOR<
      CategoriaUpdateWithoutCategoriaPadreInput,
      CategoriaUncheckedUpdateWithoutCategoriaPadreInput
    >;
    create: XOR<
      CategoriaCreateWithoutCategoriaPadreInput,
      CategoriaUncheckedCreateWithoutCategoriaPadreInput
    >;
  };

  export type CategoriaUpdateWithWhereUniqueWithoutCategoriaPadreInput = {
    where: CategoriaWhereUniqueInput;
    data: XOR<
      CategoriaUpdateWithoutCategoriaPadreInput,
      CategoriaUncheckedUpdateWithoutCategoriaPadreInput
    >;
  };

  export type CategoriaUpdateManyWithWhereWithoutCategoriaPadreInput = {
    where: CategoriaScalarWhereInput;
    data: XOR<
      CategoriaUpdateManyMutationInput,
      CategoriaUncheckedUpdateManyWithoutCategoriaPadreInput
    >;
  };

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[];
    OR?: CategoriaScalarWhereInput[];
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[];
    id?: IntFilter<'Categoria'> | number;
    codigo?: StringFilter<'Categoria'> | string;
    tipo?: StringFilter<'Categoria'> | string;
    descripcion?: StringFilter<'Categoria'> | string;
    imagenUrl?: StringNullableFilter<'Categoria'> | string | null;
    estado?: StringFilter<'Categoria'> | string;
    categoriaPadreId?: IntNullableFilter<'Categoria'> | number | null;
  };

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput;
    update: XOR<
      ProductoUpdateWithoutCategoriaInput,
      ProductoUncheckedUpdateWithoutCategoriaInput
    >;
    create: XOR<
      ProductoCreateWithoutCategoriaInput,
      ProductoUncheckedCreateWithoutCategoriaInput
    >;
  };

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput;
    data: XOR<
      ProductoUpdateWithoutCategoriaInput,
      ProductoUncheckedUpdateWithoutCategoriaInput
    >;
  };

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput;
    data: XOR<
      ProductoUpdateManyMutationInput,
      ProductoUncheckedUpdateManyWithoutCategoriaInput
    >;
  };

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[];
    OR?: ProductoScalarWhereInput[];
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[];
    id?: IntFilter<'Producto'> | number;
    codigo?: StringFilter<'Producto'> | string;
    descripcion?: StringFilter<'Producto'> | string;
    unidadVenta?: StringFilter<'Producto'> | string;
    categoriaId?: IntFilter<'Producto'> | number;
    contenidoUnidad?: StringFilter<'Producto'> | string;
    infoAdicional?: StringNullableFilter<'Producto'> | string | null;
    fotoUrl?: StringNullableFilter<'Producto'> | string | null;
    moneda?: StringFilter<'Producto'> | string;
    tasaImpuesto?: FloatFilter<'Producto'> | number;
    precioVenta?: FloatFilter<'Producto'> | number;
    estado?: StringFilter<'Producto'> | string;
  };

  export type CategoriaCreateWithoutProductosInput = {
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadre?: CategoriaCreateNestedOneWithoutSubcategoriasInput;
    subcategorias?: CategoriaCreateNestedManyWithoutCategoriaPadreInput;
  };

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
    categoriaPadreId?: number | null;
    subcategorias?: CategoriaUncheckedCreateNestedManyWithoutCategoriaPadreInput;
  };

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput;
    create: XOR<
      CategoriaCreateWithoutProductosInput,
      CategoriaUncheckedCreateWithoutProductosInput
    >;
  };

  export type StockCreateWithoutProductoInput = {
    stockFisico: number;
    stockComprometido: number;
  };

  export type StockUncheckedCreateWithoutProductoInput = {
    id?: number;
    stockFisico: number;
    stockComprometido: number;
  };

  export type StockCreateOrConnectWithoutProductoInput = {
    where: StockWhereUniqueInput;
    create: XOR<
      StockCreateWithoutProductoInput,
      StockUncheckedCreateWithoutProductoInput
    >;
  };

  export type StockCreateManyProductoInputEnvelope = {
    data: StockCreateManyProductoInput | StockCreateManyProductoInput[];
    skipDuplicates?: boolean;
  };

  export type MovimientoInventarioCreateWithoutProductoInput = {
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    unidadVenta: string;
    cantidad: number;
    estado: string;
  };

  export type MovimientoInventarioUncheckedCreateWithoutProductoInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    unidadVenta: string;
    cantidad: number;
    estado: string;
  };

  export type MovimientoInventarioCreateOrConnectWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput;
    create: XOR<
      MovimientoInventarioCreateWithoutProductoInput,
      MovimientoInventarioUncheckedCreateWithoutProductoInput
    >;
  };

  export type MovimientoInventarioCreateManyProductoInputEnvelope = {
    data:
      | MovimientoInventarioCreateManyProductoInput
      | MovimientoInventarioCreateManyProductoInput[];
    skipDuplicates?: boolean;
  };

  export type PedidoDetCreateWithoutProductoInput = {
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
    pedido: PedidoCabCreateNestedOneWithoutDetallesInput;
  };

  export type PedidoDetUncheckedCreateWithoutProductoInput = {
    id?: number;
    pedidoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type PedidoDetCreateOrConnectWithoutProductoInput = {
    where: PedidoDetWhereUniqueInput;
    create: XOR<
      PedidoDetCreateWithoutProductoInput,
      PedidoDetUncheckedCreateWithoutProductoInput
    >;
  };

  export type PedidoDetCreateManyProductoInputEnvelope = {
    data: PedidoDetCreateManyProductoInput | PedidoDetCreateManyProductoInput[];
    skipDuplicates?: boolean;
  };

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<
      CategoriaUpdateWithoutProductosInput,
      CategoriaUncheckedUpdateWithoutProductosInput
    >;
    create: XOR<
      CategoriaCreateWithoutProductosInput,
      CategoriaUncheckedCreateWithoutProductosInput
    >;
    where?: CategoriaWhereInput;
  };

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput;
    data: XOR<
      CategoriaUpdateWithoutProductosInput,
      CategoriaUncheckedUpdateWithoutProductosInput
    >;
  };

  export type CategoriaUpdateWithoutProductosInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadre?: CategoriaUpdateOneWithoutSubcategoriasNestedInput;
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput;
  };

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    categoriaPadreId?: NullableIntFieldUpdateOperationsInput | number | null;
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput;
  };

  export type StockUpsertWithWhereUniqueWithoutProductoInput = {
    where: StockWhereUniqueInput;
    update: XOR<
      StockUpdateWithoutProductoInput,
      StockUncheckedUpdateWithoutProductoInput
    >;
    create: XOR<
      StockCreateWithoutProductoInput,
      StockUncheckedCreateWithoutProductoInput
    >;
  };

  export type StockUpdateWithWhereUniqueWithoutProductoInput = {
    where: StockWhereUniqueInput;
    data: XOR<
      StockUpdateWithoutProductoInput,
      StockUncheckedUpdateWithoutProductoInput
    >;
  };

  export type StockUpdateManyWithWhereWithoutProductoInput = {
    where: StockScalarWhereInput;
    data: XOR<
      StockUpdateManyMutationInput,
      StockUncheckedUpdateManyWithoutProductoInput
    >;
  };

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[];
    OR?: StockScalarWhereInput[];
    NOT?: StockScalarWhereInput | StockScalarWhereInput[];
    id?: IntFilter<'Stock'> | number;
    productoId?: IntFilter<'Stock'> | number;
    stockFisico?: IntFilter<'Stock'> | number;
    stockComprometido?: IntFilter<'Stock'> | number;
  };

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput;
    update: XOR<
      MovimientoInventarioUpdateWithoutProductoInput,
      MovimientoInventarioUncheckedUpdateWithoutProductoInput
    >;
    create: XOR<
      MovimientoInventarioCreateWithoutProductoInput,
      MovimientoInventarioUncheckedCreateWithoutProductoInput
    >;
  };

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput;
    data: XOR<
      MovimientoInventarioUpdateWithoutProductoInput,
      MovimientoInventarioUncheckedUpdateWithoutProductoInput
    >;
  };

  export type MovimientoInventarioUpdateManyWithWhereWithoutProductoInput = {
    where: MovimientoInventarioScalarWhereInput;
    data: XOR<
      MovimientoInventarioUpdateManyMutationInput,
      MovimientoInventarioUncheckedUpdateManyWithoutProductoInput
    >;
  };

  export type MovimientoInventarioScalarWhereInput = {
    AND?:
      | MovimientoInventarioScalarWhereInput
      | MovimientoInventarioScalarWhereInput[];
    OR?: MovimientoInventarioScalarWhereInput[];
    NOT?:
      | MovimientoInventarioScalarWhereInput
      | MovimientoInventarioScalarWhereInput[];
    id?: IntFilter<'MovimientoInventario'> | number;
    tipo?: StringFilter<'MovimientoInventario'> | string;
    numero?: StringFilter<'MovimientoInventario'> | string;
    fecha?: DateTimeFilter<'MovimientoInventario'> | Date | string;
    signo?: StringFilter<'MovimientoInventario'> | string;
    productoId?: IntFilter<'MovimientoInventario'> | number;
    unidadVenta?: StringFilter<'MovimientoInventario'> | string;
    cantidad?: IntFilter<'MovimientoInventario'> | number;
    estado?: StringFilter<'MovimientoInventario'> | string;
  };

  export type PedidoDetUpsertWithWhereUniqueWithoutProductoInput = {
    where: PedidoDetWhereUniqueInput;
    update: XOR<
      PedidoDetUpdateWithoutProductoInput,
      PedidoDetUncheckedUpdateWithoutProductoInput
    >;
    create: XOR<
      PedidoDetCreateWithoutProductoInput,
      PedidoDetUncheckedCreateWithoutProductoInput
    >;
  };

  export type PedidoDetUpdateWithWhereUniqueWithoutProductoInput = {
    where: PedidoDetWhereUniqueInput;
    data: XOR<
      PedidoDetUpdateWithoutProductoInput,
      PedidoDetUncheckedUpdateWithoutProductoInput
    >;
  };

  export type PedidoDetUpdateManyWithWhereWithoutProductoInput = {
    where: PedidoDetScalarWhereInput;
    data: XOR<
      PedidoDetUpdateManyMutationInput,
      PedidoDetUncheckedUpdateManyWithoutProductoInput
    >;
  };

  export type PedidoDetScalarWhereInput = {
    AND?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
    OR?: PedidoDetScalarWhereInput[];
    NOT?: PedidoDetScalarWhereInput | PedidoDetScalarWhereInput[];
    id?: IntFilter<'PedidoDet'> | number;
    pedidoId?: IntFilter<'PedidoDet'> | number;
    productoId?: IntFilter<'PedidoDet'> | number;
    cantidad?: IntFilter<'PedidoDet'> | number;
    valorUnitario?: FloatFilter<'PedidoDet'> | number;
    tasaImpuesto?: FloatFilter<'PedidoDet'> | number;
    precioUnitario?: FloatFilter<'PedidoDet'> | number;
    precioTotal?: FloatFilter<'PedidoDet'> | number;
  };

  export type ProductoCreateWithoutStocksInput = {
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    categoria: CategoriaCreateNestedOneWithoutProductosInput;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUncheckedCreateWithoutStocksInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetUncheckedCreateNestedManyWithoutProductoInput;
  };

  export type ProductoCreateOrConnectWithoutStocksInput = {
    where: ProductoWhereUniqueInput;
    create: XOR<
      ProductoCreateWithoutStocksInput,
      ProductoUncheckedCreateWithoutStocksInput
    >;
  };

  export type ProductoUpsertWithoutStocksInput = {
    update: XOR<
      ProductoUpdateWithoutStocksInput,
      ProductoUncheckedUpdateWithoutStocksInput
    >;
    create: XOR<
      ProductoCreateWithoutStocksInput,
      ProductoUncheckedCreateWithoutStocksInput
    >;
    where?: ProductoWhereInput;
  };

  export type ProductoUpdateToOneWithWhereWithoutStocksInput = {
    where?: ProductoWhereInput;
    data: XOR<
      ProductoUpdateWithoutStocksInput,
      ProductoUncheckedUpdateWithoutStocksInput
    >;
  };

  export type ProductoUpdateWithoutStocksInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    categoriaId?: IntFieldUpdateOperationsInput | number;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUncheckedUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoCreateWithoutMovimientosInput = {
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    categoria: CategoriaCreateNestedOneWithoutProductosInput;
    stocks?: StockCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput;
    pedidosDetalle?: PedidoDetUncheckedCreateNestedManyWithoutProductoInput;
  };

  export type ProductoCreateOrConnectWithoutMovimientosInput = {
    where: ProductoWhereUniqueInput;
    create: XOR<
      ProductoCreateWithoutMovimientosInput,
      ProductoUncheckedCreateWithoutMovimientosInput
    >;
  };

  export type ProductoUpsertWithoutMovimientosInput = {
    update: XOR<
      ProductoUpdateWithoutMovimientosInput,
      ProductoUncheckedUpdateWithoutMovimientosInput
    >;
    create: XOR<
      ProductoCreateWithoutMovimientosInput,
      ProductoUncheckedCreateWithoutMovimientosInput
    >;
    where?: ProductoWhereInput;
  };

  export type ProductoUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: ProductoWhereInput;
    data: XOR<
      ProductoUpdateWithoutMovimientosInput,
      ProductoUncheckedUpdateWithoutMovimientosInput
    >;
  };

  export type ProductoUpdateWithoutMovimientosInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    stocks?: StockUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    categoriaId?: IntFieldUpdateOperationsInput | number;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUncheckedUpdateManyWithoutProductoNestedInput;
  };

  export type ClienteCreateWithoutPedidosInput = {
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
  };

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: number;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    direccion: string;
    codPostal: string;
    estado: string;
  };

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput;
    create: XOR<
      ClienteCreateWithoutPedidosInput,
      ClienteUncheckedCreateWithoutPedidosInput
    >;
  };

  export type PedidoDetCreateWithoutPedidoInput = {
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
    producto: ProductoCreateNestedOneWithoutPedidosDetalleInput;
  };

  export type PedidoDetUncheckedCreateWithoutPedidoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type PedidoDetCreateOrConnectWithoutPedidoInput = {
    where: PedidoDetWhereUniqueInput;
    create: XOR<
      PedidoDetCreateWithoutPedidoInput,
      PedidoDetUncheckedCreateWithoutPedidoInput
    >;
  };

  export type PedidoDetCreateManyPedidoInputEnvelope = {
    data: PedidoDetCreateManyPedidoInput | PedidoDetCreateManyPedidoInput[];
    skipDuplicates?: boolean;
  };

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<
      ClienteUpdateWithoutPedidosInput,
      ClienteUncheckedUpdateWithoutPedidosInput
    >;
    create: XOR<
      ClienteCreateWithoutPedidosInput,
      ClienteUncheckedCreateWithoutPedidosInput
    >;
    where?: ClienteWhereInput;
  };

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput;
    data: XOR<
      ClienteUpdateWithoutPedidosInput,
      ClienteUncheckedUpdateWithoutPedidosInput
    >;
  };

  export type ClienteUpdateWithoutPedidosInput = {
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number;
    nombres?: StringFieldUpdateOperationsInput | string;
    apePaterno?: StringFieldUpdateOperationsInput | string;
    apeMaterno?: StringFieldUpdateOperationsInput | string;
    celular?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    direccion?: StringFieldUpdateOperationsInput | string;
    codPostal?: StringFieldUpdateOperationsInput | string;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type PedidoDetUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoDetWhereUniqueInput;
    update: XOR<
      PedidoDetUpdateWithoutPedidoInput,
      PedidoDetUncheckedUpdateWithoutPedidoInput
    >;
    create: XOR<
      PedidoDetCreateWithoutPedidoInput,
      PedidoDetUncheckedCreateWithoutPedidoInput
    >;
  };

  export type PedidoDetUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoDetWhereUniqueInput;
    data: XOR<
      PedidoDetUpdateWithoutPedidoInput,
      PedidoDetUncheckedUpdateWithoutPedidoInput
    >;
  };

  export type PedidoDetUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoDetScalarWhereInput;
    data: XOR<
      PedidoDetUpdateManyMutationInput,
      PedidoDetUncheckedUpdateManyWithoutPedidoInput
    >;
  };

  export type PedidoCabCreateWithoutDetallesInput = {
    tipo: string;
    numero: string;
    fecha: Date | string;
    direccionEntrega: string;
    cliente: ClienteCreateNestedOneWithoutPedidosInput;
  };

  export type PedidoCabUncheckedCreateWithoutDetallesInput = {
    id?: number;
    tipo: string;
    numero: string;
    clienteId: number;
    fecha: Date | string;
    direccionEntrega: string;
  };

  export type PedidoCabCreateOrConnectWithoutDetallesInput = {
    where: PedidoCabWhereUniqueInput;
    create: XOR<
      PedidoCabCreateWithoutDetallesInput,
      PedidoCabUncheckedCreateWithoutDetallesInput
    >;
  };

  export type ProductoCreateWithoutPedidosDetalleInput = {
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    categoria: CategoriaCreateNestedOneWithoutProductosInput;
    stocks?: StockCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput;
  };

  export type ProductoUncheckedCreateWithoutPedidosDetalleInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    categoriaId: number;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput;
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput;
  };

  export type ProductoCreateOrConnectWithoutPedidosDetalleInput = {
    where: ProductoWhereUniqueInput;
    create: XOR<
      ProductoCreateWithoutPedidosDetalleInput,
      ProductoUncheckedCreateWithoutPedidosDetalleInput
    >;
  };

  export type PedidoCabUpsertWithoutDetallesInput = {
    update: XOR<
      PedidoCabUpdateWithoutDetallesInput,
      PedidoCabUncheckedUpdateWithoutDetallesInput
    >;
    create: XOR<
      PedidoCabCreateWithoutDetallesInput,
      PedidoCabUncheckedCreateWithoutDetallesInput
    >;
    where?: PedidoCabWhereInput;
  };

  export type PedidoCabUpdateToOneWithWhereWithoutDetallesInput = {
    where?: PedidoCabWhereInput;
    data: XOR<
      PedidoCabUpdateWithoutDetallesInput,
      PedidoCabUncheckedUpdateWithoutDetallesInput
    >;
  };

  export type PedidoCabUpdateWithoutDetallesInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput;
  };

  export type PedidoCabUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    clienteId?: IntFieldUpdateOperationsInput | number;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
  };

  export type ProductoUpsertWithoutPedidosDetalleInput = {
    update: XOR<
      ProductoUpdateWithoutPedidosDetalleInput,
      ProductoUncheckedUpdateWithoutPedidosDetalleInput
    >;
    create: XOR<
      ProductoCreateWithoutPedidosDetalleInput,
      ProductoUncheckedCreateWithoutPedidosDetalleInput
    >;
    where?: ProductoWhereInput;
  };

  export type ProductoUpdateToOneWithWhereWithoutPedidosDetalleInput = {
    where?: ProductoWhereInput;
    data: XOR<
      ProductoUpdateWithoutPedidosDetalleInput,
      ProductoUncheckedUpdateWithoutPedidosDetalleInput
    >;
  };

  export type ProductoUpdateWithoutPedidosDetalleInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    stocks?: StockUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateWithoutPedidosDetalleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    categoriaId?: IntFieldUpdateOperationsInput | number;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput;
  };

  export type PedidoCabCreateManyClienteInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    direccionEntrega: string;
  };

  export type PedidoCabUpdateWithoutClienteInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
    detalles?: PedidoDetUpdateManyWithoutPedidoNestedInput;
  };

  export type PedidoCabUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
    detalles?: PedidoDetUncheckedUpdateManyWithoutPedidoNestedInput;
  };

  export type PedidoCabUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    direccionEntrega?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoriaCreateManyCategoriaPadreInput = {
    id?: number;
    codigo: string;
    tipo: string;
    descripcion: string;
    imagenUrl?: string | null;
    estado: string;
  };

  export type ProductoCreateManyCategoriaInput = {
    id?: number;
    codigo: string;
    descripcion: string;
    unidadVenta: string;
    contenidoUnidad: string;
    infoAdicional?: string | null;
    fotoUrl?: string | null;
    moneda: string;
    tasaImpuesto: number;
    precioVenta: number;
    estado: string;
  };

  export type CategoriaUpdateWithoutCategoriaPadreInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    subcategorias?: CategoriaUpdateManyWithoutCategoriaPadreNestedInput;
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaUncheckedUpdateWithoutCategoriaPadreInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
    subcategorias?: CategoriaUncheckedUpdateManyWithoutCategoriaPadreNestedInput;
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput;
  };

  export type CategoriaUncheckedUpdateManyWithoutCategoriaPadreInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    tipo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type ProductoUpdateWithoutCategoriaInput = {
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    stocks?: StockUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput;
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput;
    pedidosDetalle?: PedidoDetUncheckedUpdateManyWithoutProductoNestedInput;
  };

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number;
    codigo?: StringFieldUpdateOperationsInput | string;
    descripcion?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    contenidoUnidad?: StringFieldUpdateOperationsInput | string;
    infoAdicional?: NullableStringFieldUpdateOperationsInput | string | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: StringFieldUpdateOperationsInput | string;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioVenta?: FloatFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type StockCreateManyProductoInput = {
    id?: number;
    stockFisico: number;
    stockComprometido: number;
  };

  export type MovimientoInventarioCreateManyProductoInput = {
    id?: number;
    tipo: string;
    numero: string;
    fecha: Date | string;
    signo: string;
    unidadVenta: string;
    cantidad: number;
    estado: string;
  };

  export type PedidoDetCreateManyProductoInput = {
    id?: number;
    pedidoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type StockUpdateWithoutProductoInput = {
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type StockUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type StockUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    stockFisico?: IntFieldUpdateOperationsInput | number;
    stockComprometido?: IntFieldUpdateOperationsInput | number;
  };

  export type MovimientoInventarioUpdateWithoutProductoInput = {
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type MovimientoInventarioUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tipo?: StringFieldUpdateOperationsInput | string;
    numero?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    signo?: StringFieldUpdateOperationsInput | string;
    unidadVenta?: StringFieldUpdateOperationsInput | string;
    cantidad?: IntFieldUpdateOperationsInput | number;
    estado?: StringFieldUpdateOperationsInput | string;
  };

  export type PedidoDetUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
    pedido?: PedidoCabUpdateOneRequiredWithoutDetallesNestedInput;
  };

  export type PedidoDetUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    pedidoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type PedidoDetUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    pedidoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type PedidoDetCreateManyPedidoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    valorUnitario: number;
    tasaImpuesto: number;
    precioUnitario: number;
    precioTotal: number;
  };

  export type PedidoDetUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
    producto?: ProductoUpdateOneRequiredWithoutPedidosDetalleNestedInput;
  };

  export type PedidoDetUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  export type PedidoDetUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number;
    productoId?: IntFieldUpdateOperationsInput | number;
    cantidad?: IntFieldUpdateOperationsInput | number;
    valorUnitario?: FloatFieldUpdateOperationsInput | number;
    tasaImpuesto?: FloatFieldUpdateOperationsInput | number;
    precioUnitario?: FloatFieldUpdateOperationsInput | number;
    precioTotal?: FloatFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
