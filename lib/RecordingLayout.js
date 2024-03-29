"use strict";
/*
 * (C) Copyright 2017-2018 OpenVidu (https://openvidu.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See [[SessionProperties.defaultRecordingLayout]] and [[RecordingProperties.recordingLayout]]
 */
var RecordingLayout;
(function (RecordingLayout) {
    /**
     * All the videos are evenly distributed, taking up as much space as possible
     */
    RecordingLayout["BEST_FIT"] = "BEST_FIT";
    /**
     * _(not available yet)_
     */
    RecordingLayout["PICTURE_IN_PICTURE"] = "PICTURE_IN_PICTURE";
    /**
     * _(not available yet)_
     */
    RecordingLayout["VERTICAL_PRESENTATION"] = "VERTICAL_PRESENTATION";
    /**
     * _(not available yet)_
     */
    RecordingLayout["HORIZONTAL_PRESENTATION"] = "VERTICAL_PRESENTATION";
    /**
     * Use your own custom recording layout. See [Custom recording layouts](/docs/advanced-features/recording#custom-recording-layouts) to learn more
     */
    RecordingLayout["CUSTOM"] = "CUSTOM";
})(RecordingLayout = exports.RecordingLayout || (exports.RecordingLayout = {}));
//# sourceMappingURL=RecordingLayout.js.map