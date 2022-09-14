"use strict";
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MRE = __importStar(require("@microsoft/mixed-reality-extension-sdk"));
/**
 * The main class of this app. All the logic goes here.
 */
class HelloWorld {
    constructor(context) {
        this.context = context;
        this.kitItem = null;
        this.context.onStarted(() => this.started());
    }
    started() {
        this.assets = new MRE.AssetContainer(this.context);
        this.kitItem = MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: 'artifact: 2090905818290454836'
        });
    }
}
exports.default = HelloWorld;
//# sourceMappingURL=app.js.map