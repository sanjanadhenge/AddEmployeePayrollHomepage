window.addEventListener('DOMContentLoaded',(event) => {
createInnerHtml();
});
const createInnerHtml =()=>{
    const innerHtml = `
    <tr>
   <th></th>
        <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>start Date</th>
                <th>Actions</th>
            </tr>
            <tr> 
                <td> <img class="profile" alt="" src="https://cdn5.vectorstock.com/i/1000x1000/73/24/user-icon-male-person-symbol-profile-avatar-vector-20787324.jpg"style="width:30px;height:50px;"alt=""></td>
                 <td> Sanjana Dhenge</td>
                 <td>Female</td>
                 <td><div class="dept-label">HR</div>
                 <div class="dept-label">Finance</div></td>
                 <td>300000</td>
                 <td>1 Nov 2020</td>
              <td>
                <img id="1" onclick="remove(this)" alt="delete"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8AAP9ZWf+goP+np//m5v/29v/Fxf+Rkf8qKv8tLf9VVf+9vf+srP+/v//V1f9ERP9MTP/Ly/+zs//6+v9kZP87O/82Nv9PT/+3t//y8v/c3P+bm/+Vlf+EhP/t7f8aGv/Q0P9qav9GRv9eXv8/P//h4f9vb/95ef/p6f99ff/Nzf9ycv+IiP8yMv/b2/8fH//tKjCUAAAFb0lEQVR4nO2daVfiMBSGLRQQWWUqiEDZFxEY//+vGwqeGadvgCSkScD3+egJ99zHbtnz8JAhxcK42q3VwjDMnyAMa93SYphlEtlR7E4+A0le+wvX6SrzHpdl9Y7k6q5TVqKwVtM70Om6TluevoZfwnzsOnM5GnNNwT2PkevsJQj1/fZM/X/lLK8S3OP5nfpWuVYwCLx+4RSfrxcMgqprjTMYuIIJJdceJ5mYEQwCX183171FvzP386PRMCYYBGvXMiKipkFDLx9Fc/doQtm/+zQyKhgEoWshwOwlDIKRdxfxVHOwsq2VPhqN3qKQsOgdaSSMW6Vqfn2qnp53bZSiKszyM/9++actcUWo7dlFnImSXL3J/bgmVPzINmNFhiNBigPpn49FhnGG+apTvzJDkeKTV7fpBhOcKwUQvYp9qp1GT5hfSy3EK0aoZZOsFkNML6cYooQhlpnkqkcL01NuqbfxQcwiVU3wKRpJfij+McD/kkevmkdI7lU5xgcaejSegV3c8t/Cv6BhwXymumD3hUaHGRp69LnAOptGfxlWi3rmM9UFDTXa6Ng6oaE5ooTiaR5yeJeeKy8OgoaNM0EOOZmQK+RXs9dms91p755OsoPcgs/TpeWDlM8U77Q78+ZzZbK9bmS1qDPSaZvdFf1yC+mBeLc8al9BwY3jJ7qtEEFN0VNGRS3BqOM6cXn0xhwXrtNWYKNl2HWdtgIdLUPdOSNO0DLcus5aBa2m5Mp11ipoNSXv3/DqmTE20TI0Nu/ABjT8YYbRV+PypgwXX2nLNIpLneaB6Y00nY7Mj0nPZxKGt1RZQ3YShuLx6ltBpoJKQ79pSxiKBqxvBxrS0H9k5kcIBtRviCkNf4ShYF7FDSEzf0AwY+CGqNDw4cQ8wZtBxtDkogL7yEw2e4+3cbzarCZ7ZrkEmCQxzblhBpnMD39/mUxelqvNOo63euNsMAalOO3QHDCB0cwiMBxl88fQzEo+GlqEhprQ0CI01ISGFqGhJjS0CA01oaFFsjKEFUkw8bjYSPEbgqRLNGD97DBdApdbTNOZGNokBLYSgLjQxzpKlyikSwTbdJF8usTz5UwMbZ+lYVi+bAhTl2F5GPYqXc6EhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjR0awh7GcPIqyVDHKs1ZAgjr7+8MTS0dTvs1UxDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIw59tiNtv350hHEl0d4b3fw1paMwQttegIQ1pmLUhrGu8O0M4J8cfQ0OrWWlIQxrSkIY0pKFHhm9wvB4NafhzDcO7N8zTkIY0pCENaUhDGtJQ23AIe7LTUJKZv4YfZgxf0nH73hg2aEhDGtKQht4aDu7eEJKzZPgOQWhIQ33D0WVDjb2g7RnG6RLDav1/YJ5LlCpQr/bSRQqpIFWoVuO/yZqhJWioDRiuzMRVZnH3hj0a6gKGEzNxlRnTUBcwnJmJqwwec5uVocxhn1mAB2pnZShzrHAWdK0ZdiIzgVWpWTMMCmYCq7K2Z+jmZSo4x3dsJvISI0O/vgWGsHItCOBMIj3wFSboqsmcBUxMFJ0mpAl0AO2pQPsuW6B9nKB3vrGAvih6MJ9s4ng7SOgfyX8jrCny/cdf8Q6xH+N4tYThryPG3ulDcXznQEeIPhPXLmIMPih+nrdu9Ju1cW0jwui7Dvvx3GPwKUyA7lrnPJmuHGPVzTGGqjP/KMIen26B9eTXMxTUmtyRScW4AHOu3AFjtGbw50bN4Bb9Uly5VjtQNrS+WUjVtd2eyVuGgvv3jevLuDO0/fMZFoImvzU6xlqE5x0HsJuRHZZ1a518UaH1qxbmLRLWqr/1nr8/oqXGXSVLZPEAAAAASUVORK5CYII="style="width:30px;height:30px;">
                <img id="1" onclick="edit" alt="update(this)"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs8R9rqdKkQG4oZdDRkDT98hnbZrgrbr9bw&usqp=CAU"style="width:30px;height:30px;">
              </td>
            </tr>`;
    document.querySelector('#table-display').innerHTML=innerHtml;
    
}