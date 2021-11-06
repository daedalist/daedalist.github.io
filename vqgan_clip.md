# VQGAN+CLIP experiments

In November 2021, my discord server exploded with hilarious experiments with
neuralblender.com. Naturally, I was curious about what ML tech was powering the
service, and wondered whether I could at least run it locally... or even serve
an instance myself for continued fun with my friends.

The blog at neuralblender.com doesn't really explain what they're doing, but a 
little casual searching on the internet suggested that VQGAN+CLIP is probably a
good place to start.

DISCLAIMER: I am not an expert in this. This page is mostly a loose list of
things that I did in order to get it working.

## Step 0: What I'm working from

My searching turned up a post on adafruit called [Generating AI "Art" with VQGAN+CLIP](https://learn.adafruit.com/generating-ai-art-with-vqgan-clip)
It points you to this [Colab notebook](https://colab.research.google.com/drive/1go6YwMFe5MX6XM9tv-cnQiSTU50N9EeT),
which does a lot of magic behind the scenes, so that you only have to give it a
few easy parameters, and you'll get some trippy AI art after a bit of a wait.

For details on how to use the colab itself, I'm just going to point you [back
to the post](https://learn.adafruit.com/generating-ai-art-with-vqgan-clip/basic-use).
It's pretty straightforward.

By default, the colab connects to a free cloud-based runtime, which I assumed
to be a bit slow. I have an RTX 3090 that doesn't get enough use, so here are
the things I did to get the Colab running locally.

## Step 1: Get linux running on my machine

I didn't want to go through the hassle of dual-booting linux, or a [type 2
hypervisor](https://www.vmware.com/topics/glossary/content/hypervisor), so
decided to go the Windows Subsystems for Linux route, which is supposed to be 
quite stable these days.

  1. This is actually pretty easy [docs](https://docs.microsoft.com/en-us/windows/wsl/install)

    ```powershell
    wsl --install
    ```

    I didn't bother to specify a distro. This is just an experiment, and I can
    always blow it away if I want to start again. 

    Things download and install. I have to restart my machine.

  2. Naturally... I get an error:

    ```
    WslRegisterDistribution failed with error: 0x80370102
    Error: 0x80370102 The virtual machine could not be started because a required feature is not installed.
    ```

    Turns out this is because WSL needs Hyper-V (which I apparently don't have
    running). I thought WSL wasn't a VM, but what do I know? I just want to get
    this running. This turns out to require two things:

    1. Turn on Hyper-V in my BIOS (instructions are motherboard-specific).
    2. Turn on the Hyper-V Windows feature.
