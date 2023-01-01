interface language {
  name: string;
  color: string;
  percentage: number;
}

interface repoLanguages {
  nodes: Array<{
    name: string;
    color: string;
  }>;
}

interface userResponse {
  data: {
    user: {
      name: string;
      login: string;
      bio: string;
      avatarUrl: string;
      contributionsCollection: {
        restrictedContributionsCount: number;
        totalCommitContributions: number;
      };
      repositories: {
        nodes: Array<{
          name: string;
          nameWithOwner: string;
          description: string;
          stargazers: {
            totalCount: number;
          };
          forks: {
            totalCount: number;
          };
          watchers: {
            totalCount: number;
          };
          languages: {
            nodes: Array<{
              name: string;
            }>;
          };
        }>;
        totalCount: number;
      };
      repositoriesContributedTo: {
        totalCount: number;
      };
      followers: {
        totalCount: number;
      };
      issues: {
        totalCount: number;
      };
      pullRequests: {
        nodes: Array<{
          additions: number;
          deletions: number;
        }>;
        totalCount: number;
      };
    };
  };
  errors: Array<{
    message: string;
  }>;
  message: string;
}

interface userDeepResponse {
  data: {
    user: {
      name: string;
      login: string;
      bio: string;
      avatarUrl: string;
      contributionsCollection: {
        restrictedContributionsCount: number;
        totalCommitContributions: number;
      };
      repositories: {
        nodes: Array<{
          name: string;
          nameWithOwner: string;
          description: string;
          defaultBranchRef: {
            target: {
              history: {
                totalCount: number;
                edges: {
                  nodes: {
                    additions: number;
                    deletions: number;
                  };
                  length: number;
                };
              };
            };
          };
          stargazers: {
            totalCount: number;
          };
          forks: {
            totalCount: number;
          };
          watchers: {
            totalCount: number;
          };
          languages: {
            nodes: Array<{
              name: string;
            }>;
          };
        }>;
        totalCount: number;
      };
      repositoriesContributedTo: {
        totalCount: number;
      };
      followers: {
        totalCount: number;
      };
      issues: {
        totalCount: number;
      };
      pullRequests: {
        nodes: Array<{
          additions: number;
          deletions: number;
        }>;
        totalCount: number;
      };
    };
  };
  errors: Array<{
    message: string;
  }>;
  message: string;
}

interface langResponse {
  data: {
    user: {
      name: string;
      login: string;
      repositories: {
        nodes: Array<{
          name: string;
          languages: {
            nodes: Array<{
              name: string;
              color: string;
            }>;
            edges: Array<{
              size: number;
            }>;
            totalCount: number;
          };
        }>;
        totalCount: number;
      };
    };
  };
  errors: Array<{
    message: string;
  }>;
  message: string;
}

interface repoResponse {
  data: {
    user: {
      repository: {
        name: string;
        nameWithOwner: string;
        description: string;
        defaultBranchRef: {
          target: {
            history: {
              totalCount: number;
              edges: {
                nodes: {
                  additions: number;
                  deletions: number;
                };
                length: number;
              };
            };
          };
        };
        stargazers: {
          totalCount: number;
        };
        forks: {
          totalCount: number;
        };
        watchers: {
          totalCount: number;
        };
        issues: {
          totalCount: number;
        };
        pullRequests: {
          totalCount: number;
        };
        languages: {
          nodes: Array<{
            name: string;
            color: string;
          }>;
        };
      };
    };
  };
  errors: Array<{
    message: string;
  }>;
  message: string;
}

export {
  language,
  repoLanguages,
  userResponse,
  userDeepResponse,
  langResponse,
  repoResponse,
};
