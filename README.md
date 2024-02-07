# Updating Arrays in State

React uygulamalarında, durum (state) yönetimi sıklıkla kullanılır ve bu durum içinde dizileri güncellemek önemlidir. Bu belgede, dizileri durumda nasıl güncelleyeceğimizi, nelere dikkat etmemiz gerektiğini ve bu süreçte kullanılan methodları ele alacağız.

## Updating Arrays in State Nedir?

Dizileri durumda güncellemek, React uygulamalarında kullanılan bir tekniktir. Bu işlem, mevcut bir diziyi değiştirme yerine, yeni bir dizi oluşturarak güncelleme yapmayı içerir. Bu yöntem, dizilerin mutasyona uğramasını önler ve React'ın yeniden render etme işlemlerini etkili bir şekilde yönetmesine yardımcı olur.

## Nelere Dikkat Edilmeli?

Dizileri durumda güncellerken dikkat edilmesi gereken bazı önemli noktalar bulunmaktadır:

1. **Mutasyondan Kaçınma:** Mevcut diziyi değiştirmek yerine, yeni bir dizi oluşturmak ve bu yeni diziyi durumda kullanmak önemlidir. Bu, dizilerin mutasyona uğramasını engeller ve beklenmeyen sonuçların önüne geçer.

2. **Referans Eşleşmesi:** React, durum değişikliklerini algılamak için referans eşleşmesini kullanır. Bu nedenle, dizileri güncellerken önceki dizinin referansını korumak önemlidir. Referans değişmediğinde, React bileşenlerinin gereksiz yeniden render edilmesi önlenir.

## Kullanım Avantajları

Dizileri durumda güncellemenin kullanım avantajları şunlardır:

- **Kodun Daha Temiz Olması:** Mutasyondan kaçınmak, kodun daha temiz ve okunabilir olmasını sağlar. Kodun bakımını ve hata ayıklamasını kolaylaştırır.

- **Beklenmedik Hataların Önlenmesi:** Mutasyonlar beklenmedik hatalara ve uygulama bozulmalarına yol açabilir. Dizileri durumda güncellemek, bu tür hataların önlenmesine yardımcı olur.

- **Performansın Artırılması:** Dizilerin mutasyona uğraması, React'ın bileşenlerin yeniden render edilmesini gereksiz yere tetiklemesine neden olabilir. Dizileri güncellemek, performansın artırılmasına ve uygulamanın daha verimli çalışmasına katkı sağlar.

Dizileri durumda güncelleme, React uygulamalarında verimli bir şekilde kullanılan bir yöntemdir. Bu yöntem, kodun daha güvenilir, temiz ve performanslı olmasını sağlar.

## Bugün basit bir todo app ile öğrendiğim konuları pekiştirdim. Map-Filter gibi methodlar ile etkili bir şekilde state içi dizilere güncelleme işlemleri yaptım.

## App.jsx
```javascript
import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';
import initialTodos from './veriler.jsx';

let nextId = 6;


export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {

    setTodos([
      ...todos,
      {
        id: nextId++, title: title, done: false
      }])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(t => t.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
```

## TaskList ve Veriler isimli diğer componentler ve diğer kodlar için projeyi inceyelebilirsiniz.






