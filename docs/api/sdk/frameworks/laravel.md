---
title: "Laravel"
---

# Laravel

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
$ composer require phantomchain/laravel php-http/guzzle6-adapter
```

## Configuration

Phantom Laravel requires connection configuration. To get started, you'll need to publish all vendor assets:

```bash
$ php artisan vendor:publish --provider="PhantomChain\Phantom\PhantomServiceProvider"
```

This will create a `config/phantom.php` file in your app that you can modify to set your configuration. Also, make sure you check for changes to the original config file in this package between releases.

#### Default Connection Name

This option `default` is where you may specify which of the connections below you wish to use as your default connection for all work. Of course, you may use many connections at once using the manager class. The default value for this setting is `main`.

#### Phantom Connections

This option `connections` is where each of the connections are setup for your application. Example configuration has been included, but you may add as many connections as you would like.

## Usage

#### ArkManager

This is the class of most interest. It is bound to the ioc container as `ark` and can be accessed using the `Facades\Phantom` facade. This class implements the ManagerInterface by extending AbstractManager. The interface and abstract class are both part of [Graham Campbell's](https://github.com/GrahamCampbell) [Laravel Manager](https://github.com/GrahamCampbell/Laravel-Manager) package, so you may want to go and checkout the docs for how to use the manager class over at that repository. Note that the connection class returned will always be an instance of `Phantom\Phantom`.

#### Facades\Phantom

This facade will dynamically pass static method calls to the `ark` object in the ioc container which by default is the `ArkManager` class.

#### PhantomServiceProvider

This class contains no public methods of interest. This class should be added to the providers array in `config/app.php`. This class will setup ioc bindings.

### Examples

Here you can see an example of just how simple this package is to use. Out of the box, the default adapter is `main`. After you enter your authentication details in the config file, it will just work:

```php
// You can alias this in config/app.php.
use PhantomChain\Phantom\Facades\Phantom;

Phantom::api('Account')->accounts();
// We're done here - how easy was that, it just works!
```

The Phantom manager will behave like it is a `PhantomChain\Phantom\Client`. If you want to call specific connections, you can do that with the connection method:

```php
use PhantomChain\Phantom\Facades\Phantom;

// Writing this…
Phantom::connection('main')->api('Account')->accounts()->create($params);

// …is identical to writing this
Phantom::api('Account')->accounts()->create($params);

// and is also identical to writing this.
Phantom::connection()->api('Account')->accounts()->create($params);

// This is because the main connection is configured to be the default.
Phantom::getDefaultConnection(); // This will return main.

// We can change the default connection.
Phantom::setDefaultConnection('alternative'); // The default is now alternative.
```

If you prefer to use dependency injection over facades like me, then you can inject the manager:

```php
use PhantomChain\Phantom\PhantomManager;

class Foo
{
    protected $phantom;

    public function __construct(PhantomManager $phantom)
    {
        $this->phantom = $phantom;
    }

    public function bar($params)
    {
        $this->phantom->api('Account')->accounts();
    }
}

App::make('Foo')->bar($params);
```

## Documentation

There are other classes in this package that are not documented here. This is because the package is a Laravel wrapper of [the Ark php-client package](https://github.com/PhantomChain/php-client).
