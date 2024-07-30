### Welcome

This repo is a command line interface that sends mammograms to the local hosted AI platform for breast cancer prediction.

### Disclaimer: 

The results from AI prediction may be false or inaccurate; please use them carefully.

### Get started

Please ensure you have Node.js installed. If not, please install it here: https://nodejs.org/en.

### Clone the repo

```
git clone git@github.com:zacharytruong/learn2cure-js.git
```

### Install all dependencies

```
npm install
```

### Add `.dcm` files

Place all `.dcm` files in the `samples` folder with your `.dcm` files.
You can add up to 4 `.dcm` files using the following name format: `001.dcm`, `002.dcm`, `003.dcm`, `004.dcm`. 

If you want to add more than four `.dcm` files, you must modify the `index.js` file.

### Getting prediction

After replacing `.dcm` files, run this code to send them to the AI for prediction

```
npm start
```

Please wait while the AI is processing your data; if everything completes successfully, you will get a response like this:

```
{
    log_file: 'LOGS_local',
    metadata: { accession: '2222222', mrn: '11111111' },
    model_name: '2D_Mammo_Cancer_Mirai',
    msg: 'OK',
    oncodata_version: '0.2.0',
    onconet_version: '0.2.0',
    oncoserve_version: '0.2.0',
    prediction: [
        0.06087625113352482,
        0.09079529028615947,
        0.11931647200437245,
        0.15326621001362306,
        0.16517581492598146
    ]
}
```

### Credits
Thanks for the contribution of the AI model from Yala https://github.com/yala/OncoServe_Public