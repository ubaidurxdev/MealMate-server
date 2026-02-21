var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// generated/prisma/enums.js
var require_enums = __commonJS({
  "generated/prisma/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProviderRestaurantStats = exports.OrderStatus = void 0;
    exports.OrderStatus = {
      PREPARING: "PREPARING",
      READY: "READY",
      DELIVERED: "DELIVERED"
    };
    exports.ProviderRestaurantStats = {
      OPEN: "OPEN",
      CLOSED: "CLOSED"
    };
  }
});

// src/app.ts
import express from "express";

// src/modules/meals/meals.router.ts
import { Router } from "express";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
var client_exports = {};
__export(client_exports, {
  $Enums: () => $Enums,
  Prisma: () => prismaNamespace_exports,
  PrismaClient: () => PrismaClient
});
import * as path from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": 'model Address {\n  id        String   @id @default(uuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id])\n  label     String\n  street    String\n  city      String\n  area      String?\n  phone     String\n  createdAt DateTime @default(now())\n}\n\nmodel User {\n  id              String            @id\n  name            String\n  email           String\n  emailVerified   Boolean           @default(false)\n  image           String?\n  createdAt       DateTime          @default(now())\n  updatedAt       DateTime          @updatedAt\n  sessions        Session[]\n  accounts        Account[]\n  address         Address[]\n  cart            Cart[]\n  order           Order[]\n  providerProfile ProviderProfile[]\n  review          Review[]\n  role            String            @default("CUSTOMER")\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nmodel Cart {\n  id        String     @id @default(uuid())\n  userId    String\n  user      User       @relation(fields: [userId], references: [id])\n  updatedAt DateTime   @updatedAt\n  cartItems CartItem[]\n}\n\nmodel CartItem {\n  id       String @id @default(uuid())\n  cartId   String\n  cart     Cart   @relation(fields: [cartId], references: [id], onDelete: Cascade)\n  mealId   String\n  meal     Meal   @relation(fields: [mealId], references: [id], onDelete: Cascade)\n  quantity Int\n\n  @@unique([cartId, mealId])\n}\n\nmodel Category {\n  id        String   @id @default(uuid())\n  name      String\n  slug      String?\n  image     String\n  createdAt DateTime @default(now())\n}\n\nmodel Meal {\n  id          String      @id @default(uuid())\n  title       String\n  description String\n  price       Float\n  image       String\n  isAvailable Boolean     @default(true)\n  ratingAvg   Float       @default(0)\n  ratingCount Int         @default(0)\n  createdAt   DateTime    @default(now())\n  updatedAt   DateTime    @updatedAt\n  reviews     Review[]\n  orderItems  OrderItem[]\n  cartItems   CartItem[]\n}\n\nmodel Order {\n  id            String      @id @default(uuid())\n  userId        String\n  user          User        @relation(fields: [userId], references: [id])\n  status        OrderStatus @default(PREPARING)\n  totalAmount   Float\n  paymentMethod String      @default("COD")\n  deliveryNote  String?\n  createdAt     DateTime    @default(now())\n  updatedAt     DateTime    @updatedAt\n  orderItems    OrderItem[]\n  reviews       Review[]\n}\n\nenum OrderStatus {\n  PREPARING\n  READY\n  DELIVERED\n}\n\nmodel OrderItem {\n  id       String @id @default(uuid())\n  mealId   String\n  meal     Meal   @relation(fields: [mealId], references: [id], onDelete: Cascade)\n  orderId  String\n  order    Order  @relation(fields: [orderId], references: [id], onDelete: Cascade)\n  price    Float\n  quantity Int\n\n  @@unique([orderId, mealId])\n}\n\nmodel ProviderProfile {\n  id          String                  @id @default(uuid())\n  userId      String\n  user        User                    @relation(fields: [userId], references: [id])\n  restaurant  String\n  description String?\n  logoUrl     String?\n  address     String\n  isOpen      ProviderRestaurantStats @default(OPEN)\n  createAt    DateTime                @default(now())\n  updatedAt   DateTime                @updatedAt\n}\n\nenum ProviderRestaurantStats {\n  OPEN\n  CLOSED\n}\n\nmodel Review {\n  id        String   @id @default(uuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id])\n  mealId    String\n  meal      Meal     @relation(fields: [mealId], references: [id], onDelete: Cascade)\n  orderId   String\n  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)\n  comment   String\n  rating    Int\n  createdAt DateTime @default(now())\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Address":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AddressToUser"},{"name":"label","kind":"scalar","type":"String"},{"name":"street","kind":"scalar","type":"String"},{"name":"city","kind":"scalar","type":"String"},{"name":"area","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"address","kind":"object","type":"Address","relationName":"AddressToUser"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToUser"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"providerProfile","kind":"object","type":"ProviderProfile","relationName":"ProviderProfileToUser"},{"name":"review","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"role","kind":"scalar","type":"String"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Cart":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"CartToUser"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartToCartItem"}],"dbName":null},"CartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"cartId","kind":"scalar","type":"String"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToCartItem"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"meal","kind":"object","type":"Meal","relationName":"CartItemToMeal"},{"name":"quantity","kind":"scalar","type":"Int"}],"dbName":null},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Meal":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"ratingAvg","kind":"scalar","type":"Float"},{"name":"ratingCount","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"reviews","kind":"object","type":"Review","relationName":"MealToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MealToOrderItem"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToMeal"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"paymentMethod","kind":"scalar","type":"String"},{"name":"deliveryNote","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"reviews","kind":"object","type":"Review","relationName":"OrderToReview"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToOrderItem"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"}],"dbName":null},"ProviderProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ProviderProfileToUser"},{"name":"restaurant","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logoUrl","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"isOpen","kind":"enum","type":"ProviderRestaurantStats"},{"name":"createAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToReview"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToReview"},{"name":"comment","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AddressScalarFieldEnum: () => AddressScalarFieldEnum,
  AnyNull: () => AnyNull2,
  CartItemScalarFieldEnum: () => CartItemScalarFieldEnum,
  CartScalarFieldEnum: () => CartScalarFieldEnum,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  MealScalarFieldEnum: () => MealScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum,
  OrderScalarFieldEnum: () => OrderScalarFieldEnum,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  ProviderProfileScalarFieldEnum: () => ProviderProfileScalarFieldEnum,
  QueryMode: () => QueryMode,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.3.0",
  engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  Address: "Address",
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  Cart: "Cart",
  CartItem: "CartItem",
  Category: "Category",
  Meal: "Meal",
  Order: "Order",
  OrderItem: "OrderItem",
  ProviderProfile: "ProviderProfile",
  Review: "Review"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var AddressScalarFieldEnum = {
  id: "id",
  userId: "userId",
  label: "label",
  street: "street",
  city: "city",
  area: "area",
  phone: "phone",
  createdAt: "createdAt"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  role: "role"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CartScalarFieldEnum = {
  id: "id",
  userId: "userId",
  updatedAt: "updatedAt"
};
var CartItemScalarFieldEnum = {
  id: "id",
  cartId: "cartId",
  mealId: "mealId",
  quantity: "quantity"
};
var CategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  slug: "slug",
  image: "image",
  createdAt: "createdAt"
};
var MealScalarFieldEnum = {
  id: "id",
  title: "title",
  description: "description",
  price: "price",
  image: "image",
  isAvailable: "isAvailable",
  ratingAvg: "ratingAvg",
  ratingCount: "ratingCount",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderScalarFieldEnum = {
  id: "id",
  userId: "userId",
  status: "status",
  totalAmount: "totalAmount",
  paymentMethod: "paymentMethod",
  deliveryNote: "deliveryNote",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderItemScalarFieldEnum = {
  id: "id",
  mealId: "mealId",
  orderId: "orderId",
  price: "price",
  quantity: "quantity"
};
var ProviderProfileScalarFieldEnum = {
  id: "id",
  userId: "userId",
  restaurant: "restaurant",
  description: "description",
  logoUrl: "logoUrl",
  address: "address",
  isOpen: "isOpen",
  createAt: "createAt",
  updatedAt: "updatedAt"
};
var ReviewScalarFieldEnum = {
  id: "id",
  userId: "userId",
  mealId: "mealId",
  orderId: "orderId",
  comment: "comment",
  rating: "rating",
  createdAt: "createdAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
var $Enums = __toESM(require_enums());
__reExport(client_exports, __toESM(require_enums()));
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/modules/meals/meals.service.ts
var createMeals = async (data) => {
  return await prisma.meal.create({
    data
  });
};
var updateMeals = async (mealId, data) => {
  const mealData = await prisma.meal.findFirst({
    where: {
      id: mealId
    }
  });
  if (!mealData) {
    return new Error("Meal doesn't exist");
  }
  return await prisma.meal.update({
    where: {
      id: mealId
    },
    data
  });
};
var deleteMeals = async (id) => {
  return await prisma.meal.delete({
    where: {
      id
    }
  });
};
var updateOrderStatus = async (id, data) => {
  return await prisma.order.update({
    where: {
      id
    },
    data
  });
};
var mealsService = {
  createMeals,
  updateMeals,
  deleteMeals,
  updateOrderStatus
};

// src/modules/meals/meals.controller.ts
var createMeals2 = async (req, res, next) => {
  try {
    const result = await mealsService.createMeals(req.body);
    res.status(201).json({
      success: true,
      message: "Meal has been created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateMeals2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await mealsService.updateMeals(id, req.body);
    res.status(200).json({
      success: true,
      message: "Meal updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateOrderStatus2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await mealsService.updateOrderStatus(id, req.body);
    res.status(200).json({
      success: true,
      message: "Order status is updated",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteMeals2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await mealsService.deleteMeals(id);
    res.status(200).json({
      success: true,
      message: "Meal is deleted",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var mealsController = {
  createMeals: createMeals2,
  updateMeals: updateMeals2,
  updateOrderStatus: updateOrderStatus2,
  deleteMeals: deleteMeals2
};

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_NAME,
    pass: process.env.APP_PASSWORD
  }
});
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  trustedOrigins: [process.env.APP_URL],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: false
      }
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }) => {
      try {
        const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
        const info = await transporter.sendMail({
          from: `"MealMate" <${process.env.APP_NAME}>`,
          to: user.email,
          subject: "Verify your email address",
          text: `
Hello ${user.name ?? "there"},

Thanks for signing up in MealMate.

Please verify your email address by clicking the link below:
${verificationUrl}

If you did not create an account, you can safely ignore this email.

\u2014 MealMate Team
      `,
          html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2>Verify your email address</h2>

  <p>Hello ${user.name ?? "there"},</p>

  <p>
    Thanks for signing up for <strong>MealMate</strong>.
    Please confirm your email address by clicking the button below.
  </p>

  <p style="margin: 30px 0;">
    <a
      href="${verificationUrl}"
      style="
        background-color: #2563eb;
        color: #ffffff;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      "
    >
      Verify Email
    </a>
  </p>

  <p>
    If the button doesn\u2019t work, copy and paste this link into your browser:
  </p>

  <p style="word-break: break-all;">
    <a href="${verificationUrl}">${verificationUrl}</a>
  </p>

  <p>
    If you didn\u2019t create an account, you can safely ignore this email.
  </p>

  <p style="margin-top: 40px;">
    \u2014 <br />
    <strong>MealMate Team</strong>
  </p>
</div>
      `
        });
        console.log("Verification email sent:", info.messageId);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  socialProviders: {
    google: {
      prompt: "select_account consent",
      accessType: "offline",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  }
});

// src/middlewares/authentication.ts
var authentication = (...roles) => {
  return async (req, res, next) => {
    try {
      const session = await auth.api.getSession({
        headers: req.headers
      });
      if (!session) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized"
        });
      }
      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: "Verified Email required"
        });
      }
      req.user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
        emailVerified: session.user.emailVerified
      };
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden! You don't have permission to access this resources!"
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

// src/modules/meals/meals.router.ts
var router = Router();
router.post(
  "/meals",
  authentication("PROVIDER" /* Provider */),
  mealsController.createMeals
);
router.put(
  "/meals/:id",
  authentication("PROVIDER" /* Provider */),
  mealsController.updateMeals
);
router.patch(
  "/orders/:id",
  authentication("PROVIDER" /* Provider */),
  mealsController.updateOrderStatus
);
router.delete(
  "/meals/:id",
  authentication("PROVIDER" /* Provider */),
  mealsController.deleteMeals
);
var mealsRouter = router;

// src/middlewares/globalErrorHandler.ts
function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let errorMessage = "Internal Server Error";
  let error = err;
  if (err instanceof prismaNamespace_exports.PrismaClientValidationError) {
    statusCode = 400;
    errorMessage = "You provide incorrect field type or missing fields!";
  } else if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      statusCode = 400;
      errorMessage = "An operation failed because it depends on one or more records that were required but not found.";
    } else if (err.code === "P2002") {
      statusCode = 400;
      errorMessage = "Duplicate key error";
    } else if (err.code === "P2003") {
      statusCode = 400;
      errorMessage = "Foreign key constraint failed";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientUnknownRequestError) {
    statusCode = 500;
    errorMessage = "Error occurred during query execution";
  } else if (err instanceof prismaNamespace_exports.PrismaClientInitializationError) {
    if (err.errorCode === "P1000") {
      statusCode = 401;
      errorMessage = "Authentication failed. Please check your creditials!";
    } else if (err.errorCode === "P1001") {
      statusCode = 400;
      errorMessage = "Can't reach database server";
    }
  }
  res.status(statusCode);
  res.json({
    message: errorMessage,
    errorDetails: err
  });
}
var globalErrorHandler_default = errorHandler;

// src/app.ts
import { toNodeHandler } from "better-auth/node";
import cors from "cors";

// src/modules/orders/orders.router.ts
import { Router as Router2 } from "express";

// src/modules/orders/orders.service.ts
var getAllOrders = async () => {
  return await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });
};
var getOrderById = async (id) => {
  return await prisma.order.findUnique({
    where: {
      id
    }
  });
};
var createOrders = async (userId, data) => {
  return await prisma.order.create({
    data: {
      ...data,
      userId
    }
  });
};
var ordersService = {
  createOrders,
  getAllOrders,
  getOrderById
};

// src/modules/orders/orders.controller.ts
var getAllOrders2 = async (req, res, next) => {
  try {
    const result = await ordersService.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Fetched all orders",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getOrderById2 = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await ordersService.getOrderById(id);
    res.status(200).json({
      success: true,
      message: "Fetched order by id",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var createOrders2 = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    console.log(userId);
    const result = await ordersService.createOrders(userId, req.body);
    res.status(201).json({
      success: true,
      message: "Order created successfully ",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var ordersController = {
  createOrders: createOrders2,
  getAllOrders: getAllOrders2,
  getOrderById: getOrderById2
};

// src/modules/orders/orders.router.ts
var router2 = Router2();
router2.get("/", authentication("PROVIDER" /* Provider */), ordersController.getAllOrders);
router2.get("/:id", authentication("PROVIDER" /* Provider */), ordersController.getOrderById);
router2.post(
  "/",
  authentication("CUSTOMER" /* Customer */),
  ordersController.createOrders
);
var ordersRouter = router2;

// src/modules/admin/admin.router.ts
import { Router as Router3 } from "express";

// src/modules/admin/admin.service.ts
var getAllUsers = async (id) => {
  return await prisma.user.findMany({
    where: {
      id: {
        not: id
      }
    }
  });
};
var adminService = {
  getAllUsers
};

// src/modules/admin/admin.controller.ts
var getAllUsers2 = async (req, res, next) => {
  try {
    const result = await adminService.getAllUsers(req.user?.id);
    res.status(200).json({
      success: true,
      message: "Fetched all users",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var adminController = {
  getAllUsers: getAllUsers2
};

// src/modules/admin/admin.router.ts
var router3 = Router3();
router3.get(
  "/users",
  authentication("ADMIN" /* Admin */),
  adminController.getAllUsers
);
var adminRouter = router3;

// src/modules/meal&providers/providers.router.ts
import { Router as Router4 } from "express";

// src/modules/meal&providers/providers.service.ts
var getAllMeals = async () => {
  return await prisma.meal.findMany();
};
var getMealsById = async (id) => {
  return await prisma.meal.findMany({
    where: {
      id
    }
  });
};
var getAllProviders = async () => {
  return await prisma.providerProfile.findMany();
};
var createProviders = async (id, data) => {
  return await prisma.providerProfile.create({
    data: {
      ...data,
      userId: id
    }
  });
};
var updateProvider = async (id, data) => {
  return await prisma.providerProfile.update({
    where: {
      id
    },
    data
  });
};
var getProviderById = async (id) => {
  return await prisma.providerProfile.findUnique({
    where: {
      id
    }
  });
};
var providerService = {
  getAllMeals,
  getMealsById,
  createProviders,
  updateProvider,
  getProviderById,
  getAllProviders
};

// src/modules/meal&providers/providers.controller.ts
var getAllMeals2 = async (req, res, next) => {
  try {
    const result = await providerService.getAllMeals();
    res.status(200).json({
      success: true,
      message: "Fetched all meals",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getAllProviders2 = async (req, res, next) => {
  try {
    const result = await providerService.getAllProviders();
    res.status(200).json({
      success: true,
      message: "Fetched all providers",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var createProviders2 = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const result = await providerService.createProviders(
      userId,
      req.body
    );
    res.status(201).json({
      success: true,
      message: "Create new providers",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateProvider2 = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (userId === req.body.id) {
      throw new Error("You are not owner of this provider");
    }
    const { id } = req.params;
    const result = await providerService.updateProvider(id, req.body);
    res.status(200).json({
      success: true,
      message: "Provider information updated",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getMealsById2 = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await providerService.getMealsById(id);
    res.status(200).json({
      success: true,
      message: "Fetched meal by id",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getProviderById2 = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await providerService.getProviderById(id);
    res.status(200).json({
      success: true,
      message: "Fetched provider profile by id",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var providerController = {
  getAllMeals: getAllMeals2,
  getMealsById: getMealsById2,
  createProviders: createProviders2,
  updateProvider: updateProvider2,
  getAllProviders: getAllProviders2,
  getProviderById: getProviderById2
};

// src/modules/meal&providers/providers.router.ts
var router4 = Router4();
router4.get("/meals", providerController.getAllMeals);
router4.get("/meals/:id", providerController.getMealsById);
router4.get("/providers/:id", providerController.getProviderById);
router4.get("/providers", providerController.getAllProviders);
router4.post(
  "/providers",
  authentication("PROVIDER" /* Provider */),
  providerController.createProviders
);
router4.put(
  "/providers/:id",
  authentication("PROVIDER" /* Provider */),
  providerController.updateProvider
);
var providerRouter = router4;

// src/modules/users/users.router.ts
import { Router as Router5 } from "express";

// src/modules/users/users.service.ts
var getCurrentUser = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id
    }
  });
};
var usersService = {
  getCurrentUser
};

// src/modules/users/users.controller.ts
var getCurrentUser2 = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const result = await usersService.getCurrentUser(userId);
    res.status(200).json({
      success: true,
      message: "This is users profile",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var usersController = {
  getCurrentUser: getCurrentUser2
};

// src/modules/users/users.router.ts
var router5 = Router5();
router5.get(
  "/me",
  authentication("ADMIN" /* Admin */, "CUSTOMER" /* Customer */, "PROVIDER" /* Provider */),
  usersController.getCurrentUser
);
var usersRouter = router5;

// src/modules/address/address.router.ts
import { Router as Router6 } from "express";

// src/modules/address/address.service.ts
var createAddress = async (id, data) => {
  return await prisma.address.create({
    data: {
      ...data,
      userId: id
    }
  });
};
var addressService = {
  createAddress
};

// src/modules/address/address.controller.ts
var createAddress2 = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const result = await addressService.createAddress(userId, req.body);
    res.status(201).json({
      success: true,
      message: "Address is created",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var addressController = {
  createAddress: createAddress2
};

// src/modules/address/address.router.ts
var router6 = Router6();
router6.post(
  "/",
  authentication("CUSTOMER" /* Customer */),
  addressController.createAddress
);
var addressRouter = router6;

// src/app.ts
var app = express();
app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000 ",
    credentials: true
  })
);
app.all("/api/auth/*splat", toNodeHandler(auth));
app.get("/", (req, res) => {
  res.send("Welcome to MealMate server");
});
app.use(express.json());
app.use("/api/provider", mealsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/admin", adminRouter);
app.use("/api", providerRouter);
app.use("/api/users", usersRouter);
app.use("/api/address", addressRouter);
app.use(globalErrorHandler_default);
var app_default = app;

// src/server.ts
var PORT = process.env.PORT || 5e3;
async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
    app_default.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("An error occurred:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
main();
