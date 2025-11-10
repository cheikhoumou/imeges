    // code form
    document.addEventListener('DOMContentLoaded', function () {
        const targetElement = document.querySelector('.product-header .sora-product-buy-buttons');

        if (targetElement) {
            // Create form and modals HTML
            const fullHTML = `

            <form id="orderForm" class="order-form" style="
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                margin-top: 60px;
            ">
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: none; margin-bottom: 5px;">اسم المنتج:</label>
                    <input type="text" id="productName" style="
                        width: 100%;
                        display: none;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        background: #f9f9f9;
                    ">
                </div>
                
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: none; margin-bottom: 5px;">السعر:</label>
                    <input type="text" id="productPrice"  style="
                        width: 100%;
                        padding: 8px;
                        display: none;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        background: #f9f9f9;
                    ">
                </div>

                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: none; margin-bottom: 5px;">الكمية:</label>
                    <div style="display: flex; align-items: center;">
                        <button type="button" id="decrementBtn" style="
                            padding: 5px 10px;
                            border: 1px solid #ddd;
                            background: #f1f1f1;
                            cursor: pointer;
                            border-radius: 4px;
                        ">-</button>
                        <input type="number" id="quantity" value="1" min="1" style="
                            width: 60px;
                            text-align: center;
                            margin: 0 10px;
                            padding: 8px;
                            border: 1px solid #ddd;
                            border-radius: 4px;
                        ">
                        <button type="button" id="incrementBtn" style="
                            padding: 5px 10px;
                            border: 1px solid #ddd;
                            background: #f1f1f1;
                            cursor: pointer;
                            border-radius: 4px;
                        ">+</button>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">اسمك:</label>
                    <input type="text" id="customerName" required style="
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    " placeholder="ضع اسمك هنا">
                </div>

                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">رقم الهاتف:</label>
                    <input type="tel" id="phoneNumber" required style="
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    " placeholder="ضع رقم الهاتف هنا" maxlength="11">
                </div>



                <button type="submit" style="
                    background: #7303c1;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 100%;
                    font-size: 16px;
                ">
                اضغط لتأكيد الطلب </button>
            </form>

            <!-- Payment Choice Modal -->
    <div id="paymentChoiceModal" class="modal">
        <div class="modal-content">
            <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">اختر طريقة الدفع</h2>
            <div class="modal-buttons">
                <button id="cashOnDeliveryBtn" class="cash-btn">  
                    <img src="https://raw.githack.com/cheikhoumou/imeges/main/icons8-pay-100.png"  />
                    التواصل للدفع</button>
                <button id="directPaymentBtn" class="direct-btn">  
                    <img src="https://raw.githack.com/cheikhoumou/imeges/main/unnamed.png"  />
                    الدفع المباشر</button>
            </div>
        <br>
        <a href="https://haasad.com/" style="color: #060303; text-decoration: none;"> العمليات تدار بواسطة <span> حصاد </span>
        </a>
        </div>

    </div>

            <!-- Direct Payment Modal -->
    <div id="directPaymentModal" class="modal">
        <div class="modal-content relative">
            <span class="close-btn closepay">&times;</span>
            <div class="price">
                المبلغ : <span class="pri">  </span>
            </div>
            <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                <img src="https://raw.githack.com/cheikhoumou/imeges/main/pay.webp" alt="">
            </div>
            <p style="color: #fff; font-weight: 600; margin-bottom: 0.5rem;">يرجى الدفع على هذا الرقم:</p>
            <div class="payment-number">
                <span id="paymentNumber">30743602</span>
                <button id="copyBtn" class="copy-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 1.25rem; height: 1.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>

            <p id="copyMessage" class="copy-message" style="display: none;">تم نسخ الرقم!</p>
            
            <div class="form-group">
                <label for="senderPhone">
                    أدخل رقم المرسل 
                    <span>
                      (  بعد الدفع على رقم التاجر 👆🏻  )    
                    </span>
                    </label>
                <input id="senderPhone" type="tel" placeholder="ضع رقم المرسل..." maxlength="8" pattern="\d{8}" required>
            </div>
            <!-- Error message container -->
            <p id="phone-error" class="error-message" style="display: none;">الرجاء إدخال 8 أرقام فقط.</p>
            <button id="confirmPaymentBtn" class="confirm-btn">تأكيد الدفع</button>
            <br>
                  <a href="https://haasad.com/" style="color: #fff; text-decoration: none;"> العمليات تدار بواسطة <span> حصاد </span>
        </a>
        </div>
    </div>

            <!-- Thank You Modal -->
            <div id="thankYouModal" class="modal">
                <div class="modal-content">
                    <div style="color: #22c55e; font-size: 3rem; margin-bottom: 1rem;">✓</div>
                    <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 0.5rem;">شكراً لك!</h2>
                    <p id="thankYouMessage" style="color: #4b5563; margin-bottom: 1rem;">تم استلام طلبك بنجاح.</p>
                    <p style="color: #4b5563;">جاري تحويلك إلى الواتساب...</p>
                </div>
            </div>
        `;
            // Add form to page
            targetElement.insertAdjacentHTML('beforeend', fullHTML);

            // Get form elements
            const form = document.getElementById('orderForm');
            const quantityInput = document.getElementById('quantity');
            const decrementBtn = document.getElementById('decrementBtn');
            const incrementBtn = document.getElementById('incrementBtn');

            // Get product details from page
            const productName = document.querySelector('h1.post-title.item_name').textContent;
            const productPrice = document.querySelector('.sora_product_item_price .meta-price').textContent;

            // Quantity controls
            decrementBtn.addEventListener('click', () => {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });

            incrementBtn.addEventListener('click', () => {
                const currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
            });

            // Global variables for form data
            let customerData = {};
            const whatsappNumber = "22243645858"; // ضع رقم الواتساب الخاص بك هنا

            // Function to open a modal
            function openModal(modalId) {
                document.getElementById(modalId).style.display = 'flex';
            }

            // Function to close a modal
            function closeModal(modalId) {
                document.getElementById(modalId).style.display = 'none';
            }

            // Function to generate and redirect to WhatsApp
            function redirectToWhatsApp(paymentMethod, senderPhone = null) {
                const customerName = customerData.customerName;
                const phoneNumber = customerData.phoneNumber;
                // const address = customerData.address;
                const quantity = customerData.quantity;

                // Prepare WhatsApp message
                let message = `
* اهلا بكم اريد هذا المنتج  *
------------------
المنتج: ${productName}
السعر: ${productPrice}
الكمية: ${quantity}
------------------
اسم العميل: ${customerName}
رقم الهاتف: ${phoneNumber}


طريقة الدفع: ${paymentMethod === 'cash' ? 'التواصل للدفع' : 'الدفع المباشر'}
${senderPhone ? `رقم المرسل: ${senderPhone}` : ''}
            `.trim();

                // Show thank you modal
                const thankYouMessage = document.getElementById('thankYouMessage');
                if (paymentMethod === 'direct') {
                    thankYouMessage.textContent = 'تم تأكيد الدفع بنجاح! جاري تحويلك إلى الواتساب...';
                } else {
                    thankYouMessage.textContent = 'تم استلام طلبك بنجاح. جاري تحويلك إلى الواتساب...';
                }
                openModal('thankYouModal');

                // Create WhatsApp link
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                // Redirect after a short delay
                setTimeout(() => {
                    window.open(whatsappLink, '_blank');
                }, 2000);
            }

            // Form submission
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                customerData = {
                    customerName: document.getElementById('customerName').value,
                    phoneNumber: document.getElementById('phoneNumber').value,
                    // address: document.getElementById('address').value,
                    quantity: quantityInput.value
                };
                openModal('paymentChoiceModal');
            });

            // Handle Cash on Delivery button click
            const cashOnDeliveryBtn = document.getElementById('cashOnDeliveryBtn');
            cashOnDeliveryBtn.addEventListener('click', () => {
                closeModal('paymentChoiceModal');
                redirectToWhatsApp('cash');
            });

            // Handle Direct Payment button click
            const directPaymentBtn = document.getElementById('directPaymentBtn');
            directPaymentBtn.addEventListener('click', () => {
                closeModal('paymentChoiceModal');
                openModal('directPaymentModal');
                document.querySelector('.pri').innerHTML = document.querySelector(".sora_product_item_price.item_price.show > span").innerHTML;
            });

            // Handle Copy button click
            const copyBtn = document.getElementById('copyBtn');
            copyBtn.addEventListener('click', () => {
                const paymentNumber = document.getElementById('paymentNumber').textContent;
                const tempInput = document.createElement('input');
                document.body.appendChild(tempInput);
                tempInput.value = paymentNumber;
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                const copyMessage = document.getElementById('copyMessage');
                copyMessage.style.display = 'block';
                setTimeout(() => {
                    copyMessage.style.display = 'none';
                }, 2000);
            });

            // Handle Confirm Payment button click
            const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
            const senderPhoneInput = document.getElementById('senderPhone');
            const phoneError = document.getElementById('phone-error');
            confirmPaymentBtn.addEventListener('click', () => {
                const senderPhone = senderPhoneInput.value;
                if (senderPhone.length === 8 && /^\d+$/.test(senderPhone)) {
                    phoneError.style.display = 'none';
                    closeModal('directPaymentModal');
                    redirectToWhatsApp('direct', senderPhone);
                } else {
                    phoneError.style.display = 'block';
                }
            });
        }
    });

 document.querySelector('.closepay').addEventListener('click', ()=> {
    closeModal('directPaymentModal');
 });
