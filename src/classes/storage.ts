import { StopGroup, StopCluster, StopGroupGpuid, StopClusterGpuid } from '../types';

/**
 * @description Manipulate GroundPlaces.
 */
export class Storage {
  /**
   * @description Returns the stopGroup identified by its Gpuid.
   * @param {StopGroupGpuid} stopGroupGpuid - Ground Place unique identifier of the StopGroup to find.
   * @returns {StopGroup|undefined}
   */
  // @ts-ignore
  public getStopGroupByGpuid(stopGroupGpuid: StopGroupGpuid): StopGroup | Error {}

  /**
   * @description Returns the stopCluster identified by its Gpuid.
   * @param {StopClusterGpuid} stopClusterGpuid - Ground place unique identifier of the StopCluster to find.
   * @returns {StopCluster|undefined}
   */
  // @ts-ignore
  public getStopClusterByGpuid(stopClusterGpuid: StopClusterGpuid): StopCluster | Error {}

  /**
   * @description Delete StopGroup only if empty.
   * @param {StopGroupGpuid} stopGroupGpuid - Ground place unique identifier of the StopGroup to remove.
   * @returns {void}
   */
  public deleteStopGroup(): void {}

  /**
   * @description Delete StopCluster only if empty.
   * @param {StopClusterGpuid} stopClusterGpuid - Ground place unique identifier of the StopCluster to remove.
   * @returns {void}
   */
  public deleteStopCluster(): void {}
}
