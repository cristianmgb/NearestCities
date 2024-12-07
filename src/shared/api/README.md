# 📂 API Directory

This folder is dedicated to configuring and managing all API integrations for the project, whether using REST or GraphQL. The structure and files inside this directory help organize the setup and ensure a clean separation of concerns.

## Purpose

- Centralize the configuration for REST and GraphQL APIs.
- Define endpoints, queries, mutations, and client settings.
- Provide reusable types and utilities to streamline API interaction.

## Suggested Structure

```plaintext
api/
├── rest/                 # Configuration and helpers for REST API
│   ├── client.ts         # REST client setup (e.g., Axios, Fetch or ReduxToolkitQuery)
│   ├── endpoints.ts      # REST API endpoints and utility functions
│   └── types.ts          # TypeScript types for REST API responses
│
├── graphql/              # Configuration and helpers for GraphQL API
│   ├── client.ts         # GraphQL client setup (e.g., Apollo Client or ReduxToolkitQuery)
│   ├── queries/          # GraphQL queries
│   │   ├── exampleQuery.graphql
│   ├── mutations/        # GraphQL mutations
│   │   ├── exampleMutation.graphql
│   └── types.ts          # TypeScript types for GraphQL schema
│
└── index.ts              # Entry point to export API configurations
