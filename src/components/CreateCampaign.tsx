import React from "react";
import { DEBUG } from "../constantValue";
import type { Crowdfactory } from "../contract-types/Crowdfactory";
import { useCrowdFactoryFunctionWriter } from "../hooks/hooks";
import { toWei } from "../utils";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAccount } from "wagmi";
import { Box, Button, TextField, Typography } from '@mui/material';

function CreateCampaign() {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [story, setStory] = useState<string>("");

  const { address } = useAccount();

  // custom hook we made in hooks.ts for writing functions
  const { writeAsync, isError } =
    useCrowdFactoryFunctionWriter("createProject");

  // rainbow kit txn handler
  const addRecentTransaction = useAddRecentTransaction();

  // onChange handler for title
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("title: ", value);

    // set title
    setTitle(value);
  };

  // onChange handler for amount
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("amount: ", value);

    // set amount
    setAmount(value);
  };

  // onChange handler for story
  const handleStory = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("story: ", value);

    // set story
    setStory(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!title || !amount || !story || !address) {
      return;
    }

    try {
      e.preventDefault();

      console.log("submit!");

      DEBUG && console.log({ title, amount, story });

      const amountToWei = toWei(amount);
      DEBUG && console.log("amountToWei: ", amountToWei);

      const functionArgs: Parameters<Crowdfactory["createProject"]> = [
        title,
        amountToWei,
        story,
        address,
      ];
      const tx = await writeAsync({
        args: functionArgs,
      });
      console.log("tx >>> ", tx);

      addRecentTransaction({
        hash: tx.hash,
        description: "Create Project Transaction",
      });
    } catch (error) {
      console.log("errror >>> ", error);
    }
  };

  return (
    <>
      <Typography variant="h2" align="center" fontWeight="bold" fontSize="1.75rem" mb={2}>
        Create Crowdfunding Project
      </Typography>

      

<Box
  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  component="form"
  onSubmit={handleSubmit}
>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: 6 }}>
    <Box width={{ xs: '100%', md: '50%' }} px={3} marginBottom={{ xs: 6, md: 0 }}>
      <Typography variant="overline" color="textSecondary" fontWeight="bold" mb={2}>
        Campaign Title
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Campaign Title"
        onChange={handleTitle}
        required
      />
    </Box>

    <Box width={{ xs: '100%', md: '50%' }} px={3}>
      <Typography variant="overline" color="textSecondary" fontWeight="bold" mb={2}>
        Required Amount
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        type="number"
        inputProps={{ min: 0, step: 0.01 }}
        placeholder="0.00"
        onChange={handleAmount}
        required
      />
    </Box>
  </Box>

  <Box marginBottom={6}>
    <Typography variant="overline" color="textSecondary" fontWeight="bold" mb={2}>
      Story
    </Typography>
    <TextField
      fullWidth
      variant="outlined"
      multiline
      rows={4}
      placeholder="Story"
      onChange={handleStory}
      required
    />
  </Box>

  <Box sx={{ display: 'flex', alignItems: 'center'}}>
    <Box width="45.333333%" />

    <Box width="66.666667%">
      <Button
        variant="contained"
        color="primary"
        sx={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}}
        type="submit"
      >
        Create Campaign
      </Button>
    </Box>

    {/* if error occurs display text to try again */}
    {isError && (
      <Typography variant="body2" color="error" fontStyle="italic">
        Error occurred! Please try again!.
      </Typography>
    )}
  </Box>
</Box>


    </>
  );
}

export default CreateCampaign;
