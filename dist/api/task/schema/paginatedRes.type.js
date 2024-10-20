"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTasks = void 0;
const graphql_1 = require("@nestjs/graphql");
const task_type_1 = require("./task.type");
let PaginatedTasks = class PaginatedTasks {
};
__decorate([
    (0, graphql_1.Field)(() => [task_type_1.TaskType]),
    __metadata("design:type", Array)
], PaginatedTasks.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatedTasks.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatedTasks.prototype, "totalPages", void 0);
PaginatedTasks = __decorate([
    (0, graphql_1.ObjectType)()
], PaginatedTasks);
exports.PaginatedTasks = PaginatedTasks;
//# sourceMappingURL=paginatedRes.type.js.map