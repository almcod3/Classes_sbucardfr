# MSR Rewards Checker

Checks if your My Starbucks Rewards account has a free drink

## Individual check

```
node rewards.js -e youraccount@email.com -p youraccount@password
```

Returns ```true``` if you have one free drink, ```false``` otherwise


## Bulk check

If you want to bulk check multiple accounts

```
node rewards.js -l youaccountlist.txt -p youruniquepassword
```

Returns a list of all accounts WITHOUT free drinks
