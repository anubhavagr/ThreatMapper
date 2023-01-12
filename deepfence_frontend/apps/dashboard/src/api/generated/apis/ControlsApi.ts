/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ControlsAgentControls,
  ModelAgentId,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ControlsAgentControlsFromJSON,
    ControlsAgentControlsToJSON,
    ModelAgentIdFromJSON,
    ModelAgentIdToJSON,
} from '../models';

export interface GetAgentControlsRequest {
    modelAgentId?: ModelAgentId;
}

export interface GetAgentInitControlsRequest {
    modelAgentId?: ModelAgentId;
}

/**
 * ControlsApi - interface
 * 
 * @export
 * @interface ControlsApiInterface
 */
export interface ControlsApiInterface {
    /**
     * Fetch actions for a given agent
     * @summary Fetch Agent Actions
     * @param {ModelAgentId} [modelAgentId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ControlsApiInterface
     */
    getAgentControlsRaw(requestParameters: GetAgentControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentControls>>;

    /**
     * Fetch actions for a given agent
     * Fetch Agent Actions
     */
    getAgentControls(requestParameters: GetAgentControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentControls>;

    /**
     * Fetch initial actions for a given agent after it started
     * @summary Fetch Agent Init Actions
     * @param {ModelAgentId} [modelAgentId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ControlsApiInterface
     */
    getAgentInitControlsRaw(requestParameters: GetAgentInitControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentControls>>;

    /**
     * Fetch initial actions for a given agent after it started
     * Fetch Agent Init Actions
     */
    getAgentInitControls(requestParameters: GetAgentInitControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentControls>;

}

/**
 * 
 */
export class ControlsApi extends runtime.BaseAPI implements ControlsApiInterface {

    /**
     * Fetch actions for a given agent
     * Fetch Agent Actions
     */
    async getAgentControlsRaw(requestParameters: GetAgentControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentControls>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/controls/agent`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelAgentIdToJSON(requestParameters.modelAgentId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ControlsAgentControlsFromJSON(jsonValue));
    }

    /**
     * Fetch actions for a given agent
     * Fetch Agent Actions
     */
    async getAgentControls(requestParameters: GetAgentControlsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentControls> {
        const response = await this.getAgentControlsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch initial actions for a given agent after it started
     * Fetch Agent Init Actions
     */
    async getAgentInitControlsRaw(requestParameters: GetAgentInitControlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentControls>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/controls/agent-init`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelAgentIdToJSON(requestParameters.modelAgentId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ControlsAgentControlsFromJSON(jsonValue));
    }

    /**
     * Fetch initial actions for a given agent after it started
     * Fetch Agent Init Actions
     */
    async getAgentInitControls(requestParameters: GetAgentInitControlsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentControls> {
        const response = await this.getAgentInitControlsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
