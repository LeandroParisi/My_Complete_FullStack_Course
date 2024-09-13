#!/bin/bash

# Prompt the user for the branch name
read -p "Enter the branch name to merge main into: " branch_name

# Check if the user provided a branch name
if [ -z "$branch_name" ]; then
  echo "Branch name cannot be empty."
  exit 1
fi

# Checkout to the specified branch
echo "Checking out to branch '$branch_name'..."
git checkout "$branch_name"

# Check if the checkout was successful
if [ $? -ne 0 ]; then
  echo "Failed to checkout to branch '$branch_name'."
  exit 1
fi

# Merge the main branch into the specified branch
echo "Merging main into branch '$branch_name'..."
git merge origin/main

# Check if the merge was successful
if [ $? -ne 0 ]; then
  echo "Failed to merge main into branch '$branch_name'."
  exit 1
fi

echo "Main has been successfully merged into branch '$branch_name'."
