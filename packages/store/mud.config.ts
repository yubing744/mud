import { storeConfig } from "@latticexyz/config";

export default storeConfig({
  storeImportPath: "../../",
  namespace: "mudstore",
  tables: {
    Hooks: "address[]",
    Callbacks: "bytes24[]",
    StoreMetadata: {
      primaryKeys: {
        tableId: "bytes32",
      },
      schema: {
        tableName: "string",
        abiEncodedFieldNames: "bytes",
      },
    },
    Mixed: {
      schema: {
        u32: "uint32",
        u128: "uint128",
        a32: "uint32[]",
        s: "string",
      },
    },
    Vector2: {
      schema: {
        x: "uint32",
        y: "uint32",
      },
    },
  },
});
