'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('franchises_departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdby: {
        type: Sequelize.INTEGER
      },
      updatedby: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function(){
        return queryInterface.createTable('basics_workers', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            workertypecode: {
              type: Sequelize.STRING
            },
            workerphotograph: {
              type: Sequelize.STRING
            },
            specialrequirement: {
              type: Sequelize.STRING
            },
            createdby: {
              type: Sequelize.INTEGER
            },
            updatedby: {
              type: Sequelize.INTEGER
            },
            partyroleassignment_id: {
              type: Sequelize.INTEGER
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            }
          }).then(function(){
            return queryInterface.createTable('basics_countries', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                name: {
                  type: Sequelize.STRING
                },
                code: {
                  type: Sequelize.STRING
                },
                iso2: {
                  type: Sequelize.STRING
                },
                phonecode: {
                  type: Sequelize.STRING
                },
                status: {
                  type: Sequelize.STRING
                }
              }).then(function(){
                return queryInterface.createTable('basics_states', {
                    id: {
                      allowNull: false,
                      autoIncrement: true,
                      primaryKey: true,
                      type: Sequelize.INTEGER
                    },
                    name: {
                      type: Sequelize.STRING
                    },
                    code: {
                      type: Sequelize.STRING
                    },
                    // country_id: {
                    //   type: Sequelize.INTEGER
                    // },
                    country_id: {
                      type: Sequelize.INTEGER,
                      references: { model: 'basics_countries', key: 'id' }
                    },
                    createdAt: {
                      allowNull: false,
                      type: Sequelize.DATE
                    },
                    updatedAt: {
                      allowNull: false,
                      type: Sequelize.DATE
                    }
                  }).then(function(){
                    return queryInterface.createTable('franchises_locations', {
                        id: {
                          allowNull: false,
                          autoIncrement: true,
                          primaryKey: true,
                          type: Sequelize.INTEGER
                        },
                        officename: {
                          type: Sequelize.STRING
                        },
                        address1: {
                          type: Sequelize.STRING
                        },
                        address2: {
                          type: Sequelize.STRING
                        },
                        zipcode: {
                          type: Sequelize.STRING
                        },
                        phonenumber: {
                          type: Sequelize.STRING
                        },
                        officeimage: {
                          type: Sequelize.STRING
                        },
                        status: {
                          type: Sequelize.STRING
                        },
                        createdby: {
                          type: Sequelize.INTEGER
                        },
                        updatedby: {
                          type: Sequelize.INTEGER
                        },
                        // country_id: {
                        //   type: Sequelize.INTEGER
                        // },
                        country_id: {
                          type: Sequelize.INTEGER,
                          references: { model: 'basics_countries', key: 'id' }
                        },
                        // state_id: {
                        //   type: Sequelize.INTEGER
                        // },
                        state_id: {
                          type: Sequelize.INTEGER,
                          references: { model: 'basics_states', key: 'id' }
                        },
                        city: {
                          type: Sequelize.STRING
                        },
                        setting: {
                          type: Sequelize.STRING
                        },
                        createdAt: {
                          allowNull: false,
                          type: Sequelize.DATE
                        },
                        updatedAt: {
                          allowNull: false,
                          type: Sequelize.DATE
                        }
                      }).then(function(){
                        return queryInterface.createTable('permissions_workgroups', {
                            id: {
                              allowNull: false,
                              autoIncrement: true,
                              primaryKey: true,
                              type: Sequelize.INTEGER
                            },
                            description: {
                              type: Sequelize.STRING
                            },
                            workcode: {
                              type: Sequelize.STRING
                            },
                            statuscode: {
                              type: Sequelize.STRING
                            },
                            createdby: {
                              type: Sequelize.INTEGER
                            },
                            updatedby: {
                              type: Sequelize.INTEGER
                            },
                            createdAt: {
                              allowNull: false,
                              type: Sequelize.DATE
                            },
                            updatedAt: {
                              allowNull: false,
                              type: Sequelize.DATE
                            }
                          }).then(function(){
                            return queryInterface.createTable('franchises_departmentallocations', {
                            id: {
                                allowNull: false,
                                autoIncrement: true,
                                primaryKey: true,
                                type: Sequelize.INTEGER
                            },
                            status: {
                                type: Sequelize.STRING
                            },
                            createdby: {
                                type: Sequelize.INTEGER
                            },
                            updatedby: {
                                type: Sequelize.INTEGER
                            },
                            // department_id: {
                            //   type: Sequelize.INTEGER
                            // },
                            department_id: {
                                type: Sequelize.INTEGER,
                                references: { model: 'franchises_departments', key: 'id' }
                            },
                            // location_id: {
                            //   type: Sequelize.INTEGER
                            // },
                            location_id: {
                                type: Sequelize.INTEGER,
                                references: { model: 'franchises_locations', key: 'id' }
                            },
                            // worker_id: {
                            //   type: Sequelize.INTEGER
                            // },
                            worker_id: {
                                type: Sequelize.INTEGER,
                                references: { model: 'basics_workers', key: 'id' }
                            },
                            createdAt: {
                                allowNull: false,
                                type: Sequelize.DATE
                            },
                            updatedAt: {
                                allowNull: false,
                                type: Sequelize.DATE
                            }
                            }).then(function(){
                                return queryInterface.createTable('franchises_departmentresourceaccesses', {
                                    id: {
                                      allowNull: false,
                                      autoIncrement: true,
                                      primaryKey: true,
                                      type: Sequelize.INTEGER
                                    },
                                    statuscode: {
                                      type: Sequelize.STRING
                                    },
                                    // departmentallocation_id: {
                                    //   type: Sequelize.INTEGER
                                    // },
                                    departmentallocation_id: {
                                      type: Sequelize.INTEGER,
                                      references: { model: 'franchises_departmentallocations', key: 'id' }
                                    },
                                    // workgroup_id: {
                                    //   type: Sequelize.INTEGER
                                    // },
                                    workgroup_id: {
                                      type: Sequelize.INTEGER,
                                      references: { model: 'permissions_workgroups', key: 'id' }
                                    },
                                    createdby: {
                                      type: Sequelize.INTEGER
                                    },
                                    updatedby: {
                                      type: Sequelize.INTEGER
                                    },
                                    createdAt: {
                                      allowNull: false,
                                      type: Sequelize.DATE
                                    },
                                    updatedAt: {
                                      allowNull: false,
                                      type: Sequelize.DATE
                                    }
                                  }).then(function(){
                                    return queryInterface.createTable('franchises_businessunitgroups', {
                                      id: {
                                        allowNull: false,
                                        autoIncrement: true,
                                        primaryKey: true,
                                        type: Sequelize.INTEGER
                                      },
                                      businessunitgroupname: {
                                        type: Sequelize.STRING
                                      },
                                      createdby: {
                                        type: Sequelize.INTEGER
                                      },
                                      updatedby: {
                                        type: Sequelize.INTEGER
                                      },
                                      createdAt: {
                                        allowNull: false,
                                        type: Sequelize.DATE
                                      },
                                      updatedAt: {
                                        allowNull: false,
                                        type: Sequelize.DATE
                                      }
                                    }).then(function(){
                                      return queryInterface.createTable('franchises_businessunittypes', {
                                        id: {
                                          allowNull: false,
                                          autoIncrement: true,
                                          primaryKey: true,
                                          type: Sequelize.INTEGER
                                        },
                                        name: {
                                          type: Sequelize.STRING
                                        },
                                        createdby: {
                                          type: Sequelize.INTEGER
                                        },
                                        updatedby: {
                                          type: Sequelize.INTEGER
                                        },
                                        createdAt: {
                                          allowNull: false,
                                          type: Sequelize.DATE
                                        },
                                        updatedAt: {
                                          allowNull: false,
                                          type: Sequelize.DATE
                                        }
                                      }).then(function(){
                                        return queryInterface.createTable('franchises_businessunits', {
                                          id: {
                                            allowNull: false,
                                            autoIncrement: true,
                                            primaryKey: true,
                                            type: Sequelize.INTEGER
                                          },
                                          franchisename: {
                                            type: Sequelize.STRING
                                          },
                                          typecode: {
                                            type: Sequelize.STRING
                                          },
                                          franchisestatus: {
                                            type: Sequelize.STRING
                                          },
                                          franchiseimage: {
                                            type: Sequelize.STRING
                                          },
                                          createdby: {
                                            type: Sequelize.INTEGER
                                          },
                                          updatedby: {
                                            type: Sequelize.INTEGER
                                          },
                                          // businessunitgroup_id: {
                                          //   type: Sequelize.INTEGER
                                          // },
                                          businessunitgroup_id: {
                                            type: Sequelize.INTEGER,
                                            references: { model: 'franchises_businessunitgroups', key: 'id' }
                                          },
                                          // franchisetype_id: {
                                          //   type: Sequelize.INTEGER
                                          // },
                                          franchisetype_id: {
                                            type: Sequelize.INTEGER,
                                            references: { model: 'franchises_businessunittypes', key: 'id' }
                                          },
                                          createdAt: {
                                            allowNull: false,
                                            type: Sequelize.DATE
                                          },
                                          updatedAt: {
                                            allowNull: false,
                                            type: Sequelize.DATE
                                          }
                                        })
                                      }).then(function(){
                                        return queryInterface.createTable('franchises_distributioncenters', {
                                          id: {
                                            allowNull: false,
                                            autoIncrement: true,
                                            primaryKey: true,
                                            type: Sequelize.INTEGER
                                          },
                                          createdby: {
                                            type: Sequelize.INTEGER
                                          },
                                          updatedby: {
                                            type: Sequelize.INTEGER
                                          },
                                          // businessunit_id: {
                                          //   type: Sequelize.INTEGER
                                          // },
                                          businessunit_id: {
                                            type: Sequelize.INTEGER,
                                            references: { model: 'franchises_businessunits', key: 'id' }
                                          },
                                          createdAt: {
                                            allowNull: false,
                                            type: Sequelize.DATE
                                          },
                                          updatedAt: {
                                            allowNull: false,
                                            type: Sequelize.DATE
                                          }
                                        }).then(function(){
                                          return queryInterface.createTable('franchises_officeworkgroups', {
                                              id: {
                                                allowNull: false,
                                                autoIncrement: true,
                                                primaryKey: true,
                                                type: Sequelize.INTEGER
                                              },
                                              location_id: {
                                                type: Sequelize.INTEGER
                                              },
                                              workgroup_id: {
                                                type: Sequelize.INTEGER
                                              },
                                              createdAt: {
                                                allowNull: false,
                                                type: Sequelize.DATE
                                              },
                                              updatedAt: {
                                                allowNull: false,
                                                type: Sequelize.DATE
                                              }
                                            }).then(function(){
                                              return queryInterface.createTable('franchises_operatorbusinessunitassignments', {
                                                  id: {
                                                    allowNull: false,
                                                    autoIncrement: true,
                                                    primaryKey: true,
                                                    type: Sequelize.INTEGER
                                                  },
                                                  effectivedatetime: {
                                                    type: Sequelize.DATE
                                                  },
                                                  expirationdatetime: {
                                                    type: Sequelize.DATE
                                                  },
                                                  operatornumber: {
                                                    type: Sequelize.INTEGER
                                                  },
                                                  createdby: {
                                                    type: Sequelize.INTEGER
                                                  },
                                                  updatedby: {
                                                    type: Sequelize.INTEGER
                                                  },
                                                  // businessunit_id: {
                                                  //   type: Sequelize.INTEGER
                                                  // },
                                                  businessunit_id: {
                                                    type: Sequelize.INTEGER,
                                                    references: { model: 'franchises_businessunits', key: 'id' }
                                                  },
                                                  operator_id: {
                                                    type: Sequelize.INTEGER
                                                  },
                                                  createdAt: {
                                                    allowNull: false,
                                                    type: Sequelize.DATE
                                                  },
                                                  updatedAt: {
                                                    allowNull: false,
                                                    type: Sequelize.DATE
                                                  }
                                                }).then(function(){
                                                  return queryInterface.createTable('franchises_positions', {
                                                      id: {
                                                        allowNull: false,
                                                        autoIncrement: true,
                                                        primaryKey: true,
                                                        type: Sequelize.INTEGER
                                                      },
                                                      title: {
                                                        type: Sequelize.STRING
                                                      },
                                                      description: {
                                                        type: Sequelize.STRING
                                                      },
                                                      fulltimeflag: {
                                                        type: Sequelize.INTEGER
                                                      },
                                                      salaryflag: {
                                                        type: Sequelize.INTEGER
                                                      },
                                                      createdby: {
                                                        type: Sequelize.INTEGER
                                                      },
                                                      updatedby: {
                                                        type: Sequelize.INTEGER
                                                      },
                                                      // location_id: {
                                                      //   type: Sequelize.INTEGER
                                                      // },
                                                      location_id: {
                                                        type: Sequelize.INTEGER,
                                                        references: { model: 'franchises_locations', key: 'id' }
                                                      },
                                                      status: {
                                                        type: Sequelize.STRING
                                                      },
                                                      penalrateflag: {
                                                        type: Sequelize.INTEGER
                                                      },
                                                      createdAt: {
                                                        allowNull: false,
                                                        type: Sequelize.DATE
                                                      },
                                                      updatedAt: {
                                                        allowNull: false,
                                                        type: Sequelize.DATE
                                                      }
                                                    }).then(function(){
                                                      return queryInterface.createTable('franchises_retailstores', {
                                                          id: {
                                                            allowNull: false,
                                                            autoIncrement: true,
                                                            primaryKey: true,
                                                            type: Sequelize.INTEGER
                                                          },
                                                          opendate: {
                                                            type: Sequelize.DATE
                                                          },
                                                          closingdate: {
                                                            type: Sequelize.DATE
                                                          },
                                                          size: {
                                                            type: Sequelize.INTEGER
                                                          },
                                                          sellingareasize: {
                                                            type: Sequelize.INTEGER
                                                          },
                                                          lastremodeldate: {
                                                            type: Sequelize.DATE
                                                          },
                                                          createdby: {
                                                            type: Sequelize.INTEGER
                                                          },
                                                          updatedby: {
                                                            type: Sequelize.INTEGER
                                                          },
                                                          // businessunit_id: {
                                                          //   type: Sequelize.INTEGER
                                                          // },
                                                          businessunit_id: {
                                                            type: Sequelize.INTEGER,
                                                            references: { model: 'franchises_businessunits', key: 'id' }
                                                          },
                                                          createdAt: {
                                                            allowNull: false,
                                                            type: Sequelize.DATE
                                                          },
                                                          updatedAt: {
                                                            allowNull: false,
                                                            type: Sequelize.DATE
                                                          }
                                                        }).then(function(){
                                                          return queryInterface.createTable('franchises_workeravailabilities', {
                                                              id: {
                                                                allowNull: false,
                                                                autoIncrement: true,
                                                                primaryKey: true,
                                                                type: Sequelize.INTEGER
                                                              },
                                                              effectivedate: {
                                                                type: Sequelize.DATE
                                                              },
                                                              expirationdate: {
                                                                type: Sequelize.DATE
                                                              },
                                                              // location_id: {
                                                              //   type: Sequelize.INTEGER
                                                              // },
                                                              location_id: {
                                                                type: Sequelize.INTEGER,
                                                                references: { model: 'franchises_locations', key: 'id' }
                                                              },
                                                              // worker_id: {
                                                              //   type: Sequelize.INTEGER
                                                              // },
                                                              worker_id: {
                                                                type: Sequelize.INTEGER,
                                                                references: { model: 'basics_workers', key: 'id' }
                                                              },
                                                              createdAt: {
                                                                allowNull: false,
                                                                type: Sequelize.DATE
                                                              },
                                                              updatedAt: {
                                                                allowNull: false,
                                                                type: Sequelize.DATE
                                                              }
                                                            }).then(function(){
                                                              return queryInterface.createTable('auth_users', {
                                                                  id: {
                                                                    allowNull: false,
                                                                    autoIncrement: true,
                                                                    primaryKey: true,
                                                                    type: Sequelize.INTEGER
                                                                  },
                                                                  password: {
                                                                    type: Sequelize.STRING
                                                                  },
                                                                  last_login: {
                                                                    type: Sequelize.DATE
                                                                  },
                                                                  is_superuser: {
                                                                    type: Sequelize.BOOLEAN
                                                                  },
                                                                  username: {
                                                                    type: Sequelize.STRING
                                                                  },
                                                                  first_name: {
                                                                    type: Sequelize.STRING
                                                                  },
                                                                  last_name: {
                                                                    type: Sequelize.STRING
                                                                  },
                                                                  email: {
                                                                    type: Sequelize.STRING
                                                                  },
                                                                  is_staff: {
                                                                    type: Sequelize.BOOLEAN
                                                                  },
                                                                  is_active: {
                                                                    type: Sequelize.BOOLEAN
                                                                  },
                                                                  date_joined: {
                                                                    type: Sequelize.DATE
                                                                  },
                                                                  createdAt: {
                                                                    allowNull: false,
                                                                    type: Sequelize.DATE
                                                                  },
                                                                  updatedAt: {
                                                                    allowNull: false,
                                                                    type: Sequelize.DATE
                                                                  }
                                                                }).then(function(){
                                                                  return queryInterface.createTable('franchises_workerpositionassignments', {
                                                                      id: {
                                                                        allowNull: false,
                                                                        autoIncrement: true,
                                                                        primaryKey: true,
                                                                        type: Sequelize.INTEGER
                                                                      },
                                                                      statuscode: {
                                                                        type: Sequelize.STRING
                                                                      },
                                                                      createdby: {
                                                                        type: Sequelize.INTEGER
                                                                      },
                                                                      updatedby: {
                                                                        type: Sequelize.INTEGER
                                                                      },
                                                                      // department_id: {
                                                                      //   type: Sequelize.INTEGER
                                                                      // },
                                                                      department_id: {
                                                                        type: Sequelize.INTEGER,
                                                                        references: { model: 'franchises_departments', key: 'id' }
                                                                      },
                                                                      // postion_id: {
                                                                      //   type: Sequelize.INTEGER
                                                                      // },
                                                                      postion_id: {
                                                                        type: Sequelize.INTEGER,
                                                                        references: { model: 'franchises_positions', key: 'id' }
                                                                      },
                                                                      // worker_id: {
                                                                      //   type: Sequelize.INTEGER
                                                                      // },
                                                                      worker_id: {
                                                                        type: Sequelize.INTEGER,
                                                                        references: { model: 'basics_workers', key: 'id' }
                                                                      },
                                                                      title: {
                                                                        type: Sequelize.STRING
                                                                      },
                                                                      effectivedate: {
                                                                        type: Sequelize.DATE
                                                                      },
                                                                      expirationdate: {
                                                                        type: Sequelize.DATE
                                                                      },
                                                                      createdAt: {
                                                                        allowNull: false,
                                                                        type: Sequelize.DATE
                                                                      },
                                                                      updatedAt: {
                                                                        allowNull: false,
                                                                        type: Sequelize.DATE
                                                                      }
                                                                    }).then(function(){
                                                                      return queryInterface.createTable('employees_resources', {
                                                                        id: {
                                                                          allowNull: false,
                                                                          autoIncrement: true,
                                                                          primaryKey: true,
                                                                          type: Sequelize.INTEGER
                                                                        },
                                                                        parentresource_id: {
                                                                          type: Sequelize.INTEGER,
                                                                          references: { model: 'employees_resources', key: 'id'}
                                                                        },
                                                                        description: {
                                                                          type: Sequelize.STRING
                                                                        },
                                                                        resourcecode: {
                                                                          type: Sequelize.STRING
                                                                        },
                                                                        display_order: {
                                                                          type: Sequelize.INTEGER
                                                                        },
                                                                        createdAt: {
                                                                          allowNull: false,
                                                                          type: Sequelize.DATE
                                                                        },
                                                                        updatedAt: {
                                                                          allowNull: false,
                                                                          type: Sequelize.DATE
                                                                        }
                                                                      }).then(function(){
                                                                        return queryInterface.createTable('permissions_groupsourceaccesses', {
                                                                          id: {
                                                                            allowNull: false,
                                                                            autoIncrement: true,
                                                                            primaryKey: true,
                                                                            type: Sequelize.INTEGER
                                                                          },
                                                                          groupreadaccesslevelflag: {
                                                                            type: Sequelize.STRING
                                                                          },
                                                                          groupwriteaccesslevelflag: {
                                                                            type: Sequelize.STRING
                                                                          },
                                                                          resource_id: {
                                                                            type: Sequelize.INTEGER,
                                                                            references: { model: 'employees_resources', key: 'id'}
                                                                          },
                                                                          workgroup_id: {
                                                                            type: Sequelize.INTEGER,
                                                                            references: { model: 'permissions_workgroups', key: 'id'}
                                                                          },
                                                                          createdAt: {
                                                                            allowNull: false,
                                                                            type: Sequelize.DATE
                                                                          },
                                                                          updatedAt: {
                                                                            allowNull: false,
                                                                            type: Sequelize.DATE
                                                                          }
                                                                        }).then(function(){
                                                                          return queryInterface.createTable('employees_operators', {
                                                                            id: {
                                                                              allowNull: false,
                                                                              autoIncrement: true,
                                                                              primaryKey: true,
                                                                              type: Sequelize.INTEGER
                                                                            },
                                                                            accesspassword: {
                                                                              type: Sequelize.STRING
                                                                            },
                                                                            username: {
                                                                              type: Sequelize.STRING
                                                                            },
                                                                            user_id: {
                                                                              type: Sequelize.INTEGER,
                                                                              references: { model: 'auth_users', key: 'id'}
                                                                            },
                                                                            createdAt: {
                                                                              allowNull: false,
                                                                              type: Sequelize.DATE
                                                                            },
                                                                            updatedAt: {
                                                                              allowNull: false,
                                                                              type: Sequelize.DATE
                                                                            }
                                                                          }).then(function(){
                                                                            return queryInterface.createTable('permissions_operatorgroups', {
                                                                              id: {
                                                                                allowNull: false,
                                                                                autoIncrement: true,
                                                                                primaryKey: true,
                                                                                type: Sequelize.INTEGER
                                                                              },
                                                                              operator_id: {
                                                                                type: Sequelize.INTEGER,
                                                                                references: { model: 'employees_operators', key: 'id'}
                                                                              },
                                                                              workgroup_id: {
                                                                                type: Sequelize.INTEGER,
                                                                                references: { model: 'permissions_workgroups', key: 'id'}
                                                                              },
                                                                              statuscode: {
                                                                                type: Sequelize.STRING
                                                                              },
                                                                              createby: {
                                                                                type: Sequelize.INTEGER
                                                                              },
                                                                              updateat: {
                                                                                type: Sequelize.INTEGER
                                                                              },
                                                                              createdAt: {
                                                                                allowNull: false,
                                                                                type: Sequelize.DATE
                                                                              },
                                                                              updatedAt: {
                                                                                allowNull: false,
                                                                                type: Sequelize.DATE
                                                                              }
                                                                            }).then(function(){
                                                                              return queryInterface.createTable('franchises_administrationcenters', {
                                                                                id: {
                                                                                  allowNull: false,
                                                                                  autoIncrement: true,
                                                                                  primaryKey: true,
                                                                                  type: Sequelize.INTEGER
                                                                                },
                                                                                createdby: {
                                                                                  type: Sequelize.INTEGER
                                                                                },
                                                                                updatedby: {
                                                                                  type: Sequelize.INTEGER
                                                                                },
                                                                                // businessunit_id: {
                                                                                //   type: Sequelize.INTEGER
                                                                                // },
                                                                                businessunit_id: {
                                                                                  type: Sequelize.INTEGER,
                                                                                  references: { model: 'franchises_businessunits', key: 'id' }
                                                                                },
                                                                                createdAt: {
                                                                                  allowNull: false,
                                                                                  type: Sequelize.DATE
                                                                                },
                                                                                updatedAt: {
                                                                                  allowNull: false,
                                                                                  type: Sequelize.DATE
                                                                                }
                                                                              }).then(function(){
                                                                                return queryInterface.createTable('franchises_worklocations', {
                                                                                  id: {
                                                                                    allowNull: false,
                                                                                    autoIncrement: true,
                                                                                    primaryKey: true,
                                                                                    type: Sequelize.INTEGER
                                                                                  },
                                                                                  createdby: {
                                                                                    type: Sequelize.INTEGER
                                                                                  },
                                                                                  updatedby: {
                                                                                    type: Sequelize.INTEGER
                                                                                  },
                                                                                  // businessunit_id: {
                                                                                  //   type: Sequelize.INTEGER
                                                                                  // },
                                                                                  businessunit_id: {
                                                                                    type: Sequelize.INTEGER,
                                                                                    references: { model: 'franchises_businessunits', key: 'id' }
                                                                                  },
                                                                                  // location_id: {
                                                                                  //   type: Sequelize.INTEGER
                                                                                  // },
                                                                                  location_id: {
                                                                                    type: Sequelize.INTEGER,
                                                                                    references: { model: 'franchises_locations', key: 'id' }
                                                                                  },
                                                                                  createdAt: {
                                                                                    allowNull: false,
                                                                                    type: Sequelize.DATE
                                                                                  },
                                                                                  updatedAt: {
                                                                                    allowNull: false,
                                                                                    type: Sequelize.DATE
                                                                                  }
                                                                                })
                                                                              })
                                                                            })
                                                                          })
                                                                          
                                                                        })
                                                                      })
                                                                      
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                      })
                                    })
                                    
                                  })
                            })
                          })
                      })
                  })
              })
          })
    });
  },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('franchises_departments');
//   }
};