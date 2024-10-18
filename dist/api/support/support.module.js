"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const support_controller_1 = require("./support.controller");
const support_provider_1 = require("./support.provider");
const support_service_1 = require("./support.service");
const schema_1 = require("./schema");
const common_1 = require("@nestjs/common");
let SupportModule = class SupportModule {
};
SupportModule = __decorate([
    (0, common_1.Module)({
        providers: [
            support_provider_1.SupportProvider,
            support_service_1.SupportService,
        ],
        exports: [support_service_1.SupportService],
        controllers: [support_controller_1.SupportController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.Support.name,
                    schema: schema_1.SupportSchema,
                },
            ]),
        ],
    })
], SupportModule);
exports.SupportModule = SupportModule;
//# sourceMappingURL=support.module.js.map