import { Storage } from '../../src/classes/storage';

const dummyGroundPlaces = JSON.stringify({
  'c|FRstrasbou@u0ts2': {
    unique_name: 'strasbourg',
    childs: ['g|FRststbi__@u0tkxd'],
    serviced: 'True',
    has_been_modified: false,
    warning: false,
    country_code: 'fr',
    is_latest: true,
    name: 'Strasbourg, Grand-Est, France',
    longitude: 7.74815,
    latitude: 48.583,
    type: 'cluster',
  },
  'g|FRststbi__@u0tkxd': {
    childs: [
      {
        unique_name: null,
        company_name: 'flixbus',
        name: 'Strasbourg, Strasbourg - Bischheim',
        latitude: 48.616228,
        serviced: 'True',
        company_id: 5,
        longitude: 7.719863,
        id: '19528',
      },
    ],
    name: 'Strasbourg, Strasbourg - Bischheim',
    longitude: 7.719863,
    serviced: 'True',
    has_been_modified: false,
    warning: false,
    country_code: 'fr',
    latitude: 48.616228,
    is_latest: true,
    type: 'group',
  },
});

describe('getStopCluster()', () => {
  const StorageInstance: Storage = new Storage(dummyGroundPlaces);
  it('should return the right StopCluster based on its Gpuid', () => {
    const getStopCluster = StorageInstance.getStopCluster('c|FRstrasbou@u0ts2');

    expect(StorageInstance.getStopCluster).toHaveBeenCalledTimes(1);
    expect(getStopCluster).toEqual({
      unique_name: 'strasbourg',
      childs: ['g|FRststbi__@u0tkxd'],
      serviced: 'True',
      has_been_modified: false,
      warning: false,
      country_code: 'fr',
      is_latest: true,
      name: 'Strasbourg, Grand-Est, France',
      longitude: 7.74815,
      latitude: 48.583,
      type: 'cluster',
    });
  });

  it('should throw an error if the StopCluster based on its Gpuid is not found', () => {
    let thrownError;

    try {
      StorageInstance.getStopCluster('badGpuid');
    } catch (error) {
      thrownError = error;
    }

    expect(thrownError).toEqual(new Error('The StopCluster with the Gpuid badGpuid is not found.'));
  });

  it('should throw an error if the StopCluster based on its Gpuid is found but not of type cluster', () => {
    let thrownError;

    try {
      StorageInstance.getStopCluster('g|FRstraroet@u0tkr3');
    } catch (error) {
      thrownError = error;
    }

    expect(thrownError).toEqual(new Error('The StopCluster with the Gpuid g|FRstraroet@u0tkr3 is not found.'));
  });
});
