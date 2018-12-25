# Writing Documentation for PHANTOM
![ark-docs-banner](https://github.com/PhantomChain/docs/blob/master/banner.png?raw=true)

**On this page you will find all the details necessary to writing compliant documentation for PHANTOM.**

## Terminology
There are many terms commonly used when describing aspects of PHANTOM and related technologies. In an effort to standardize how documentation is presented to the user and to remove differences across different texts, we have established the following rules for using PHANTOM terminology.

### Commonly used PHANTOM concepts and project names
Firstly, the term "PHANTOM" refers to an entire umbrella of concepts and is mainly used as a prefix to describe projects it maintains or supports.

For example, the most basic form of this is writing "PHANTOM"; this can be used interchangeably with "PHANTOM".

 > Writing documentation for PHANTOM

 > Writing documentation for the PHANTOM

Both are acceptable.

Here is a list of officially recognized terms and the proper way to use each of them:
 - CONCEPTS
   - **PHANTOM**:  *"Writing documentation for the PHANTOM"*
   - **PHANTOM Community**: *"PHANTOM Community members offer advice on the Slack channel"*
   - **PHANTOM Team**: *"Being a member of the PHANTOM Team"*
   - **BridgeChain**: *"I launched a cool BridgeChain with PHANTOM Deployer on Azure"*
   - **SmartBridge**: *"It's time to read data from the SmartBridge field of the freshly gathered transaction"*
 - PROJECTS
   - **Phantom Core**: *"Phantom Core is dubbed v2"*
   - **PHANTOM Node**: *"The PHANTOM blockchain software PHANTOM Node is being deprecated"*
   - **PHANTOM Explorer**: *"View your PHANTOM address' transaction history with help of the PHANTOM Explorer"*
   - **PHANTOM Mobile Wallet**: *"PHANTOM Mobile is available for both Android and iOS"*
   - **PHANTOM Desktop Wallet**: *"Use the PHANTOM Desktop client if using Windows, MacOS or Linux"*
   - **AIPs, PHANTOM Improvement Proposals**: *"I'm rolling in all these AIPs (PHANTOM Improvement Proposals)"*
   - **PHANTOM (LANG) Crypto**: *"The PHANTOM JS Crypto documentation needs some love!"*
   - **PHANTOM (LANG) Client**: *"I'm using the PHANTOM PHP Client as my API client"*
   - **PHANTOM Deployer**: *"You can use PHANTOM Deployer to launch your own BrideChain"*

The specific terms above SHOULD be capitalized to prevent reader confusion.

For certain cases (docs, website, forum), it is acceptable to use the actual URL subdomain.domain.tld format if it's intuitive:

 - *"Find all relevant information on the [docs.phantom.org](https://docs.phantom.org)"*
 - *"Blog, Forums, Roadmap and more can be found at the [phantom.org](https://phantom.org) website"*
 - *"I love the community over at the [forum.phantom.org](https://forum.phantom.org)"*

:::danger
When talking about PHANTOM's native currency, you MUST refer to it as PHANTOM - it is commonly used as the currency ticker on exchanges and within PHANTOM projects like the PHANTOM Desktop Wallet and PHANTOM Explorer. The currency symbol for PHANTOM is "ⓟ". It can be represented with the decimal Unicode 1126 or "\&#1126;" in HTML.
:::
Generic terms like "address", "wallet", "transaction", "delegate", "vote", "blockchain", "currency" SHOULD NOT be capitalized, alongside the three above terms which mainly refer to concepts and not necessarily rigid implementations.

The scopes of each category might change to include or exclude new or old concepts at any given time, due to the constantly evolving PHANTOM (Ecosystem) landscape.

### Commonly used technological concepts and project names
Although it would be ideal, not all documents can afford to only mention PHANTOM's projects and concepts.

We encourage you to always follow other projects' standards for writing about them when you mention them in a document:

 > The PHANTOM blockchain was created later than the Bitcoin blockchain

In addition, please refrain from capitalizing terms like "blockchain", as it would imply some type of unencouraged buzz-wordedness.

## Linking
An important part of documenting for the open source PHANTOM is to offer the reader an unintrusive option to go to another branch of resources and learn without breaking the underlying reading experience.

### Commonly used technological concepts and project names 
It is acceptable to link once to PHANTOM or other technological projects mentionned in the document you write, unless mentionned in succession within a list. Linking the first occurrence of a technological project mention is good practice.

Additionally, you are encourages to provide a list of references at the end of your written document. This helps streamline the user's experience when wanting to read resources on aforementionned projects without having to scroll back through the document.

### URLs
To provide an easy to access and clean reference to a website, especially when dealing with websites external to the PHANTOM, the writer MUST inlude a link to the URL with an appropriate name rather than the plain, unclickable, URL.
:::danger
answers can be searched for on https://google.com
:::
:::tip
answers can be search for on [google](https://google.com)
answers can be search for on [google.com](https://google.com)
:::

## Images
As an important part of online documentation, images must be used with respect to licensing rights and other ethical considerations.

To unify the look and feel of the documentation, images or other branded content available and relevant to your document SHOULD be included.

If writing a document for an PHANTOM project, like the PHANTOM Mobile Wallet, you MUST use the official banner image for it (located on GitHub) at the start of the document.

When needing to use official PHANTOM imagery, you may find suitable media assets at [phantom.org/mediakit](https://phantom.org/mediakit). Otherwise, you are encouraged to design your own images, use external images with proper attribution in as references or outsource the graphical design task to someone else.

## References
Here you can find an example list of references.

Please use this template for every document which has any reference at all:

> - **Phantom Core**: [https://github.com/PhantomChain/core](https://github.com/PhantomChain/core)
> - **PHANTOM Node**: [https://github.com/PhantomChain/ark-node](https://github.com/PhantomChain/ark-node)
> - **PHANTOM Explorer**: [https://github.com/PhantomChain/explorer](https://github.com/PhantomChain/explorer)
> - **PHANTOM Mobile Wallet**: [https://github.com/PhantomChain/mobile-wallet](https://github.com/PhantomChain/mobile-wallet)
> - **PHANTOM Desktop Wallet**: [https://github.com/PhantomChain/desktop-wallet](https://github.com/PhantomChain/desktop-wallet)
> - **AIPs, PHANTOM Improvement Proposals**: [https://github.com/PhantomChain/aips](https://github.com/PhantomChain/aips)
> - **PHANTOM (LANG) Client**: [https://github.com/PhantomChain/php-client](https://github.com/PhantomChain/php-client) There are many implementations, all named with the same convention. Replace the programming language for a different implementation
> - **PHANTOM (LANG) Crypto**: [https://github.com/PhantomChain/php-crypto](https://github.com/PhantomChain/php-crypto) Same as clients, every client implementation has a related crypto implementation
> - **PHANTOM Deployer**: [https://github.com/PhantomChain/ark-deployer](https://github.com/PhantomChain/deployer)
> - **PHANTOM website**: [https://phantom.org](https://phantom.org)
> - **PHANTOM documentation**: [https://docs.phantom.org](https://docs.phantom.org)
> - **PHANTOM forum**: [https://forum.phantom.org](https://forum.phantom.org)
> - **PHANTOM mediakit**: [https://phantom.org/mediakit](https://phantom.org/mediakit)
> - **PHANTOM blog**: [https://blog.phantom.org](https://blog.phantom.org)
