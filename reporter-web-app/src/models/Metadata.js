/*
 * Copyright (C) 2021 Bosch.IO GmbH
 * Copyright (C) 2021 HERE Europe B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

class Metadata {
    #analyzerStartTime;

    constructor(obj) {
        if (obj instanceof Object) {
            if (obj.analyzer_start_time || obj.analyzerStartTime) {
                this.#analyzerStartTime = obj.analyzer_start_time || obj.analyzerStartTime;
            }
        }
    }

    get analyzerStartTime() {
        return this.#analyzerStartTime;
    }
}

export default Metadata;
