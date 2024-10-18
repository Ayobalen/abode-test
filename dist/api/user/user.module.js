"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const helpers_1 = require("../../helpers");
const services_1 = require("../../services");
const auth_module_1 = require("../auth/auth.module");
const schema_1 = require("./schema");
const user_provider_1 = require("./user.provider");
const auth_resolver_1 = require("../auth/auth.resolver");
const auth_provider_1 = require("../auth/auth.provider");
const jwt_1 = require("@nestjs/jwt");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        providers: [user_provider_1.UserProvider, services_1.UserService, helpers_1.UtilService, auth_provider_1.AuthProvider, jwt_1.JwtService, auth_resolver_1.UserAuthResolver],
        exports: [services_1.UserService],
        controllers: [],
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.User.name,
                    schema: schema_1.UserSchema,
                },
            ]),
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map