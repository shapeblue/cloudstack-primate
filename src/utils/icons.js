// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import _ from 'lodash'
import cloudian from '@/assets/icons/cloudian.svg?inline'

const osMapping = {
  ubuntu: 'ubuntu',
  debian: 'debian',
  redhat: 'redhat',
  centos: 'centos',
  fedora: 'fedora',
  suse: 'suse',
  linux: 'linux',
  bsd: 'freebsd',
  apple: 'apple',
  dos: 'windows',
  windows: 'windows',
  oracle: 'java'
}

const getNormalizedOsName = (osName) => {
  osName = osName.toLowerCase()
  return _.find(osMapping, (value, key) => osName.includes(key)) || 'linux'
}

export { getNormalizedOsName, cloudian }
