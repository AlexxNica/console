// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface V1FloppyTarget
 */
export interface V1FloppyTarget {
  /**
   * ReadOnly. Defaults to false.
   * @type {boolean}
   * @memberof V1FloppyTarget
   */
  readonly?: boolean;
  /**
   * Tray indicates if the tray of the device is open or closed. Allowed values are \"open\" and \"closed\". Defaults to closed. +optional
   * @type {string}
   * @memberof V1FloppyTarget
   */
  tray?: string;
}
