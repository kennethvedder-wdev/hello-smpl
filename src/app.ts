/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as MRE from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    private kitItem: MRE.Actor = null;
    private assets: MRE.AssetContainer;

    constructor(private context: MRE.Context) {
        this.context.onStarted(() => this.started());
    }

    private started() {
        
        this.assets = new MRE.AssetContainer(this.context);

        this.kitItem = MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: 'artifact: 2090905818290454836'
        });
    }
}

