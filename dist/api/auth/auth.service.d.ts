/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { UserToken, UserTokenDocument, UserAuth, UserAuthDocument } from 'src/api/auth/schema';
import { ITokenPayload, IUserAuth, IUserToken } from 'src/interfaces';
export declare class AuthService {
    private readonly userAuthModel;
    private readonly userTokenModel;
    private readonly jwtService;
    constructor(userAuthModel: Model<UserAuthDocument>, userTokenModel: Model<UserTokenDocument>, jwtService: JwtService);
    createAuth(userAuthData: IUserAuth): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getUserByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    updateUserAuth(filterQuery: FilterQuery<UserAuthDocument>, updateQuery: UpdateQuery<UserAuthDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deleteUserAuth(filterQuery: FilterQuery<UserAuthDocument>): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    createUserToken(tokenData: IUserToken): Promise<Omit<import("mongoose").Document<unknown, {}, UserTokenDocument> & import("mongoose").Document<unknown, any, any> & UserToken & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, never>>;
    updateUserToken(filterQuery: FilterQuery<UserTokenDocument>, updateQuery: UpdateQuery<UserTokenDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, UserTokenDocument> & import("mongoose").Document<unknown, any, any> & UserToken & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getToken(data: ITokenPayload, options?: JwtSignOptions): Promise<string>;
    decode(token: string): ITokenPayload;
    deleteUserByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
