## 🛠 Setup Guide: Appwrite CLI & Local Backend

### 1. Install Appwrite CLI

The CLI allows you to manage your backend directly from your terminal.

* **NPM (All Platforms):**
```bash
npm install -g appwrite-cli

```


* **MacOS (Homebrew):**
```bash
brew install appwrite

```


* **Windows (PowerShell):**
```powershell
iwr -useb https://appwrite.io/cli/install.ps1 | iex

```

Verify the installation:

```bash
appwrite -v

```

---

### 2. Self-Host Appwrite (Local Setup)

To run Appwrite on your own machine, you need **Docker** installed.

1. **Run the Installer:**
In your terminal, run the following command to pull the latest Appwrite image and start the setup:
```bash
# For Linux/MacOS
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:latest

```


*(Windows users: Use `PowerShell` and replace `$(pwd)` with `${pwd}`)*
2. **Follow the Prompts:**
* Choose your ports (default **80** and **443**).
* Choose your secret key (keep this safe!).
* Set your hostname (default **localhost**).


3. **Access the Console:**
Once finished, open [http://localhost](https://www.google.com/search?q=http://localhost) in your browser. Create your first **Admin Account** and a new **Project**.

---

### 3. Link CLI to Local Project

Now, tell the CLI to talk to your local instance instead of the Appwrite Cloud.

1. **Login:**
```bash
appwrite login

```


* **Endpoint:** `http://localhost/v1`
* **Email/Password:** Use the admin credentials you just created.


2. **Initialize Project:**
Inside your repository root, run:
```bash
appwrite init project

```


* Select **"Link this directory to an existing Appwrite project"**.
* Choose the project you created in the browser.
* This creates an `appwrite.json` file in your folder.



---

### 4. Deploy Database Schema

Instead of creating tables manually in the browser, push the existing configuration:

1. **Check your `appwrite.config.json**`: Ensure your collections and attributes are defined in the file.
2. **Push to Server:**
```bash
appwrite push

```


* If the CLI asks which configuration to use, choose **Local**.
* This will automatically create your Databases, Collections (Tables), and Attributes (Columns).



---

## 🚀 Further Development

* **Adding new fields:** Update `appwrite.config.json` and run `appwrite push ` again.
* **Pulling changes:** If you made changes in the browser UI, sync them back to your code using:
```bash
appwrite pull

```


