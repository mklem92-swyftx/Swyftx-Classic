import React from "react";
import { Grid } from "@mui/material";
import { Page } from "@mklem92/swyftx-classic-ui";
import { HardwareWallet, LedgerNano, Welcome } from "./components";
import { ledgerNanoSPlus, ledgerNanoX } from "./components/Shop.data";

const Shop: React.FC = () => {
  return (
    <Page label="Shop">
      <Grid container rowSpacing={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <Welcome />
        </Grid>
        <Grid item xs={12} md={6}>
          <HardwareWallet />
        </Grid>
        <Grid item xs={12} md={6}>
          <LedgerNano ledger={ledgerNanoX} />
        </Grid>
        <Grid item xs={12} md={6}>
          <LedgerNano ledger={ledgerNanoSPlus} />
        </Grid>
      </Grid>
    </Page>
  );
};

export { Shop };
