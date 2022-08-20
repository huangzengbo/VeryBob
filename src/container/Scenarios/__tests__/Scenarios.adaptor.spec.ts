import { iScenario } from '../../../types/scenario';
import { iSort } from '../../../types/sort';
import { applySortSearch } from '../Scenarios.adaptor';

describe('applySortSearch sort correctly', () => {
  it('applySortSearch name sort aesc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'name',
        isAesc: true,
    } as iSort;

    const keyword = '';

    const output = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });

  it('applySortSearch name sort desc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'name',
        isAesc: false,
    } as iSort;

    const keyword = '';

    const output = [
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });

  it('applySortSearch name created aesc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-07-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'created',
        isAesc: true,
    } as iSort;

    const keyword = '';

    const output = [
        
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        },
        {
            id: 1,
            name: 'abc',
            created: '2022-07-01T11:00:00',
            status: 'optimised'
        },
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });

  it('applySortSearch name created desc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-07-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'created',
        isAesc: false,
    } as iSort;

    const keyword = '';

    const output = [
        {
            id: 1,
            name: 'abc',
            created: '2022-07-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });

  it('applySortSearch name status aesc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'status',
        isAesc: true,
    } as iSort;

    const keyword = '';

    const output = [
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        },
        
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });

  it('applySortSearch name status desc', () => {
    const scenarios = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        }
    ];

    const sort= {
        sortBy: 'status',
        isAesc: false,
    } as iSort;

    const keyword = '';

    const output = [
        {
            id: 1,
            name: 'abc',
            created: '2022-01-01T11:00:00',
            status: 'optimised'
        },
        {
            id: 2,
            name: 'def',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
        {
            id: 3,
            name: 'ghi',
            created: '2022-06-01T11:00:00',
            status: 'error'
        },
    ];

    expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
  });
});

describe('applySortSearch search correctly', () => {
    it('applySortSearch name search', () => {
      const scenarios = [
          {
              id: 1,
              name: 'abc',
              created: '2022-01-01T11:00:00',
              status: 'optimised'
          },
          {
              id: 2,
              name: 'def',
              created: '2022-01-12T11:00:00',
              status: 'incomplete'
          },
          {
              id: 3,
              name: 'ghi',
              created: '2022-06-01T11:00:00',
              status: 'error'
          }
      ];
  
      const sort= {
          sortBy: 'name',
          isAesc: true,
      } as iSort;
  
      const keyword = 'ab';
  
      const output = [
          {
              id: 1,
              name: 'abc',
              created: '2022-01-01T11:00:00',
              status: 'optimised'
          },
      ];
  
      expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
    });

    it('applySortSearch name search empty', () => {
        const scenarios = [
            {
                id: 1,
                name: 'abc',
                created: '2022-01-01T11:00:00',
                status: 'optimised'
            },
            {
                id: 2,
                name: 'def',
                created: '2022-01-12T11:00:00',
                status: 'incomplete'
            },
            {
                id: 3,
                name: 'ghi',
                created: '2022-06-01T11:00:00',
                status: 'error'
            }
        ];
    
        const sort= {
            sortBy: 'name',
            isAesc: true,
        } as iSort;
    
        const keyword = '';
    
        const output = [
            {
                id: 1,
                name: 'abc',
                created: '2022-01-01T11:00:00',
                status: 'optimised'
            },
            {
                id: 2,
                name: 'def',
                created: '2022-01-12T11:00:00',
                status: 'incomplete'
            },
            {
                id: 3,
                name: 'ghi',
                created: '2022-06-01T11:00:00',
                status: 'error'
            }
        ];;
    
        expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
      });

      it('applySortSearch name search no result', () => {
        const scenarios = [
            {
                id: 1,
                name: 'abc',
                created: '2022-01-01T11:00:00',
                status: 'optimised'
            },
            {
                id: 2,
                name: 'def',
                created: '2022-01-12T11:00:00',
                status: 'incomplete'
            },
            {
                id: 3,
                name: 'ghi',
                created: '2022-06-01T11:00:00',
                status: 'error'
            }
        ];
    
        const sort= {
            sortBy: 'name',
            isAesc: true,
        } as iSort;
    
        const keyword = 'xyz';
    
        const output = [] as iScenario[];
    
        expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
      });
});


describe('applySortSearch search and sort correctly', () => {
    it('applySortSearch name search', () => {
      const scenarios = [
          {
              id: 1,
              name: 'abc',
              created: '2022-01-01T11:00:00',
              status: 'optimised'
          },
          {
              id: 2,
              name: 'bcd',
              created: '2022-01-12T11:00:00',
              status: 'incomplete'
          },
          {
              id: 3,
              name: 'def',
              created: '2022-06-01T11:00:00',
              status: 'error'
          }
      ];
  
      const sort= {
          sortBy: 'name',
          isAesc: false,
      } as iSort;
  
      const keyword = 'b';
  
      const output = [
        {
            id: 2,
            name: 'bcd',
            created: '2022-01-12T11:00:00',
            status: 'incomplete'
        },
          {
              id: 1,
              name: 'abc',
              created: '2022-01-01T11:00:00',
              status: 'optimised'
          },
      ];
  
      expect(applySortSearch(scenarios, sort, keyword)).toEqual(output);
    });

});